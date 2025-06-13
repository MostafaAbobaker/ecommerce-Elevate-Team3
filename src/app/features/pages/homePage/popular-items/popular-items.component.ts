import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { SectionTitleComponent } from "../../../../shared/components/ui/section-title/section-title.component";
import { TabsModule } from 'primeng/tabs';
import { Categories } from '../categories/model/categories';
import { ItemProductComponent } from '../../../../shared/components/ui/item-product/item-product.component';
import { IItemProduct } from '../../../../shared/components/ui/item-product/model/iitem-product';
import { CategoriesService } from '../categories/service/categories.service';
import { popularItemService } from './service/popular-item.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-popular-items',
  imports: [SectionTitleComponent,TabsModule, ItemProductComponent],
  templateUrl: './popular-items.component.html',
  styleUrl: './popular-items.component.css'
})
export class TestPopularItemsComponent implements AfterViewInit , OnDestroy{
  categories:Categories []= [] ;
  activeTap:string = '0'
  productsItems :IItemProduct[] = []
    private getAllCategoriesService!: Subscription;
    private getPopularItemsService!: Subscription;

  constructor(private _popularItemService:popularItemService,private _categoriesService:CategoriesService) {

  }
  ngOnDestroy(): void {
    this.getAllCategoriesService.unsubscribe()
    this.getPopularItemsService.unsubscribe()
  }
  ngAfterViewInit(): void {
    this.getPopularItems(this.activeTap)
  }
    ngOnInit() {

        this.getCategories()


    }

    getCategories() {
      this.getAllCategoriesService = this._categoriesService.getAllCategories().subscribe({
        next:(res)=> {
          this.categories = res.categories;
          if (this.categories.length > 0) {
            this.activeTap = this.categories[0]._id;
            this.getPopularItems(this.activeTap);
          }

        },error:(err)=>{
          console.log(err);
        }
      })
    }
    getPopularItems(id:string)    {
      this.activeTap = id;
      this.getPopularItemsService = this._popularItemService.getPopularItems(id).subscribe({
        next:(res)=> {
          this.productsItems = res.products;
        },error:(err)=>{
          console.log(err);
        }
      })
    }


}
