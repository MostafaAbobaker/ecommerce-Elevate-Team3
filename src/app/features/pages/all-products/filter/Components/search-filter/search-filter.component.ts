import {Component, inject, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {FilterObjectService} from '../../service/filter-object.service';
import { FilterOjectService } from '../../service/filter-oject.service';

@Component({
  selector: 'app-search-filter',
  imports: [ TranslatePipe,FormsModule  ],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.css'
})
export class SearchFilterComponent implements OnInit{
  inputSearchValue:string = '';

  constructor(private _filterObjectService:FilterOjectService){}

  ngOnInit(): void {
    // this._filterObjectService.filterObject.searchTerm = this.inputSearchValue;

  }

  onSearchInputChange(): void {
    this._filterObjectService.addTextSearch(this.inputSearchValue);
    this._filterObjectService.filterObject$.subscribe(filter => {
      console.log('🟢 Received filter:', filter);
    });

  }
}
