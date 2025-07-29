import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Categories } from '../../homePage/categories/model/categories';

import { SliderModule } from 'primeng/slider';
import { CheckboxModule } from 'primeng/checkbox';

import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { IFilterObj } from './interface/filterObject';
import { OccasionsService } from '../../../../shared/services/getOccasions/occasions.service';
import { GetCategoriesService } from '../../../../shared/services/getCategories/getCategories.service';
import { IOccasions } from '../../../../shared/interfaces/IOccasions/ioccasions';
import { Store } from '@ngrx/store';
import * as ProductActions from '../../../../store/products.actions';


@Component({
  selector: 'app-filter',
  imports: [ SliderModule , FormsModule, TranslatePipe, CommonModule, CheckboxModule, TranslatePipe ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit {
/*   @Output() filterObjectChange = new EventEmitter<IFilterObj>();
 */
  filterObject :IFilterObj= {
    textSearch: '',
    Categories: [],
    occasions: [],
    priceRange: [0, 80],
    rating: [],
  } ;


  Occasions: IOccasions[] = [];
  Categories: Categories[] = [];

  constructor(private _occasionsService:OccasionsService,
              private _categoriesService: GetCategoriesService,
              private store: Store
  ) { }

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
    this._occasionsService.getAllOccasions().subscribe({
      next: (res) => {
        this.Occasions = res.occasions;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }


  filterOption( ) {

    console.log('This Object Filter',this.filterObject);
    this.store.dispatch(ProductActions.filterProducts({ filterObject: this.filterObject }));

    /* if (option === 'Categories') {

      this.filterObject.Categories = this.filterObject.Categories?.filter((cat) => cat !== id);
      this.filterObject.Categories?.push(id);
    } else if (option === 'occasions') {
      this.filterObject.occasions = this.filterObject.occasions?.filter((occ) => occ !== id);
      this.filterObject.occasions?.push(id);
    } else if (option === 'rating') {
      this.filterObject.rating = this.filterObject.rating?.filter((occ) => occ !== id);
      this.filterObject.rating?.push(id);
    } else if (option === 'textSearch') {
      this.filterObject.textSearch = this.textSearchInput;
    }

    this.filterObject.priceRange = {
        min: this.rangeValues?.[0].toString(),
        max: this.rangeValues?.[1].toString()
      };
      debugger
    this.store.dispatch(ProductActions.filterProducts({ filterObject: this.filterObject })); */

    // console.log(this.filterObject);
    /* this.filterObjectChange.emit(this.filterObject);  */// Emit to parent

  }

}
