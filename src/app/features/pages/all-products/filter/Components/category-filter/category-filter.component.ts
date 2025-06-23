import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {GetCategoriesService} from '../../../../../../shared/services/getCategories/getCategories.service';
import {Categories} from '../../../../homePage/categories/model/categories';
import {Subscription} from 'rxjs';
import {getProductsService} from '../../../../../../shared/services/getProducts/getProducts.service';
import {IItemProduct} from '../../../../../../shared/components/ui/item-product/model/iitem-product';
import {FilterObjectService} from '../../service/filter-object.service';

@Component({
  selector: 'app-category-filter',
  imports: [
    TranslatePipe,
  ],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.css'
})
export class CategoryFilterComponent implements OnInit, OnDestroy{

  private readonly categoriesService: GetCategoriesService = inject(GetCategoriesService); // From homePage
  private readonly getProductsService: getProductsService = inject(getProductsService); // popular-items
  private readonly filterObjectService: FilterObjectService = inject(FilterObjectService); // Filter
  private  getAllCategoriesService!: Subscription;
  private getProductService!: Subscription;

  allCategories: Categories [] = [];
  products: IItemProduct [] = [];

  ngOnInit(): void {
    this.getAllCategories();
  }

  // This method fetches all categories from the GetCategoriesService (Category Filter Component)
  getAllCategories(): void {
    this.getAllCategoriesService = this.categoriesService.getAllCategories().subscribe({
      next: (data: any): void => {

        this.allCategories = data.categories.map((category: Categories) => ({
          ...category,
          checked: false,
          unChecked: true
        }));


        // Filter Object
        this.filterObjectService.filterObject.category = data.categories.map((category: Categories) => ({
          ...category,
          checked: false,
          unChecked: true
        }));
        //

        console.log(this.allCategories);
        console.log("obj",this.filterObjectService.filterObject.category);
      }
    })
  }

  /// This method is called when a checkbox is selected or deselected /***/(## Not Done)
  checkBoxSelected (category: Categories): void {
    category.checked = !category.checked;
    category.unChecked = !category.unChecked;

    // if this true, then we need to fetch the specific category
    if(category.checked) {
      console.log("checked",category.name, category._id);
      this.getSpecificCategory(category);
    }
    if(category.unChecked) {

      console.log("obj",this.filterObjectService.filterObject.products);

      console.log("unCheck obj",this.filterObjectService.filterObject.products);
      this.products = this.products.filter((product: IItemProduct): boolean => product.category != category._id);
      this.filterObjectService.filterObject.products = this.products;

      console.log("unCheck Array",this.products);
      console.log("unCheck Obj",this.filterObjectService.filterObject.products);
      console.log("obj all", this.filterObjectService.filterObject );
    }
  }

  // This method fetches a specific category based on the selected category ID /***/(## Not Done)
  getSpecificCategory(category: Categories): void {
    this.getProductService = this.getProductsService.getPopularItems(category._id).subscribe({
      next: (data: any): void => {

        const _currentProducts: IItemProduct[] = this.products;
        const _newProducts: IItemProduct[] = data.products;
        this.products = [..._currentProducts, ..._newProducts];

        this.filterObjectService.filterObject.products = this.products;

        console.log("array", this.products);
        console.log("obj", this.filterObjectService.filterObject.products );
        console.log("obj all", this.filterObjectService.filterObject );
      }
    });
  }

  ngOnDestroy(): void {
    if (this.getAllCategoriesService) {
      this.getAllCategoriesService.unsubscribe();
    }
    if (this.getProductService) {
      this.getProductService.unsubscribe();
    }
  }
}
