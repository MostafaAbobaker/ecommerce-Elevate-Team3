import { Component } from '@angular/core';
import { SliderModule } from 'primeng/slider';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OccasionsService } from '../service/occasions.service';
import { CategoriesService } from '../service/categories.service';
import { IOccasions } from '../model/ioccasions';
import { Categories } from '../../homePage/categories/model/categories';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-test-filter',
  imports: [SliderModule , FormsModule, TranslatePipe, CommonModule,ReactiveFormsModule],
  templateUrl: './test-filter.component.html',
  styleUrl: './test-filter.component.css'
})
export class TestFilterComponent {
  rangeValues: number[] = [0, 80];
  textSearchInput: string = '';

  Occasions: IOccasions[] = [];
  Categories: Categories[] = [];
  constructor(private _occasionsService:OccasionsService,
              private _categoriesService: CategoriesService
  ) { }

  filterForm:FormGroup = new FormGroup({
    textSearch: new FormControl(''),
    priceRange: new FormGroup({
      min: new FormControl(0),
      max: new FormControl(80)
    }),
    occasions: new FormControl(),
    categories: new FormControl(),
    rating: new FormControl(),
  });


  ngOnInit(): void {
    this.getCategories();
    this.getOccasions();
  }


  getCategories() {
    this._categoriesService.getAllCategories().subscribe({
      next: (res) => {
        this.Categories = res.categories;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  getOccasions() {
    this._occasionsService.getOccasions().subscribe({
      next: (res) => {
        this.Occasions = res.occasions;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  onFilterChange(filter: any) {
    // Emit the filter object to the parent component
    console.log('Filter from child:', filter);
  }
}
