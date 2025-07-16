import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {GetCategoriesService} from '../../../../../../shared/services/getCategories/getCategories.service';
import {Categories} from '../../../../homePage/categories/model/categories';
import {Subscription} from 'rxjs';
import { FilterOjectService } from '../../service/filter-oject.service';

@Component({
  selector: 'app-category-filter',
  imports: [ TranslatePipe ],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.css'
})
export class CategoryFilterComponent implements OnInit, OnDestroy{

  private readonly categoriesService: GetCategoriesService = inject(GetCategoriesService); // From homePage
  private readonly filterObjectService: FilterOjectService = inject(FilterOjectService); // Filter

  private  getAllCategoriesService!: Subscription;
  allCategories: Categories [] = [];

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
          // unChecked: true
        }));

      }
    })
  }

  /// This method is called when a checkbox is selected or deselected /***/(## Not Done)
  checkBoxSelected(category: Categories): void {
    const filter = this.filterObjectService.currentFilter.category
    if (!filter.some(item => item._id == category._id)) {
      this.filterObjectService.addCategory(category);
    } else {
      this.filterObjectService.removeCategory(category)
    }
    console.log(this.filterObjectService.currentFilter);
  }

  ngOnDestroy(): void {
    if (this.getAllCategoriesService) {
      this.getAllCategoriesService.unsubscribe();
    }

  }
}
