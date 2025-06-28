import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IOccasions } from '../model/ioccasions';
import { Categories } from '../../homePage/categories/model/categories';
import { CategoriesService } from '../service/categories.service';
import { OccasionsService } from '../service/occasions.service';

import { SliderModule } from 'primeng/slider';

import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { IFilterObj } from '../model/ifilter-obj';


@Component({
  selector: 'app-filter',
  imports: [ SliderModule , FormsModule, TranslatePipe, CommonModule ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit {
  @Output() filterObjectChange = new EventEmitter<IFilterObj>();

  filterObject :IFilterObj= {
    textSearch: '',
    Categories :  [],
    occasions : [],
    priceRange : {
      min: '',
      max: 'string'
    },
    rating : []
 } ;

  rangeValues: number[] = [0, 80];
  textSearchInput: string = '';

  Occasions: IOccasions[] = [];
  Categories: Categories[] = [];
  constructor(private _occasionsService:OccasionsService,
              private _categoriesService: CategoriesService
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
    this._occasionsService.getOccasions().subscribe({
      next: (res) => {
        this.Occasions = res.occasions;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  filterOption(option: string,id:string ) {


    if (option === 'Categories') {

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

    // console.log(this.filterObject);
    this.filterObjectChange.emit(this.filterObject); // Emit to parent

  }

}
