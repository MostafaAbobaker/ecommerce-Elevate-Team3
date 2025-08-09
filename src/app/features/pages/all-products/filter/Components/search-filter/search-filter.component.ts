import {Component, inject, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import { FilterOjectService } from '../../service/filter-oject.service';
import { Store } from '@ngrx/store';
import * as ProductActions from '../../../../../../store/products.actions';

@Component({
  selector: 'app-search-filter',
  imports: [ TranslatePipe,FormsModule  ],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.css'
})
export class SearchFilterComponent implements OnInit{
  inputSearchValue:string = '';

  constructor(private _filterObjectService:FilterOjectService , private store: Store){}

  ngOnInit(): void {
    // this._filterObjectService.filterObject.searchTerm = this.inputSearchValue;

  }

  onSearchInputChange(): void {
    this._filterObjectService.addTextSearch(this.inputSearchValue);
    this._filterObjectService.filterObject$.subscribe(filter => {
      console.log('🟢 Received filter:', filter);
    });

    this.store.dispatch(ProductActions.filterProducts({ filterObject: this._filterObjectService.currentFilter }));
  }
}
