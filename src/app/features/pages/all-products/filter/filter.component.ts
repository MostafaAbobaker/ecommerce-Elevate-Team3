import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Categories } from '../../homePage/categories/model/categories';

import { SliderModule } from 'primeng/slider';
import { CheckboxModule } from 'primeng/checkbox';
import { RatingModule } from 'primeng/rating';

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
  imports: [ SliderModule , FormsModule, TranslatePipe, CommonModule, CheckboxModule, TranslatePipe , RatingModule ],
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
    priceRange: [0, 4200],
    rating: 0,
  } ;

  priceRangeSS: number[] = [0, 4200];

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
slideEvent(event:any) {
  console.log('Slider value changed:', event);

}

  filterOption( ) {
    debugger
    var cloned = JSON.parse(JSON.stringify(this.filterObject));
    console.log('This Object Filter',cloned);
    this.store.dispatch(ProductActions.filterProducts({ filterObject: cloned }));

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

  resetOptionFilter(type:string){

   switch (type) {
    case 'Categories':
      this.filterObject.Categories = [];
      break;
    case 'occasions':
      this.filterObject.occasions = [];
      break;
    case 'rating':
      this.filterObject.rating = 0;
      break;
    case 'priceRange':
      this.filterObject.priceRange = [0, 5000];
      break;
    case 'all':
      this.filterObject = {
        textSearch: '',
        Categories: [],
        occasions: [],
        priceRange: [0, 5000],
        rating: 0,
      };
      break;
  }
  var cloned = JSON.parse(JSON.stringify(this.filterObject));
    console.log('This Object Filter',cloned);
    this.store.dispatch(ProductActions.filterProducts({ filterObject: cloned }));

  }





}
