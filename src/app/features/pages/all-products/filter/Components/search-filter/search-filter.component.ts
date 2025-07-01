import {Component, inject} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {FilterObjectService} from '../../service/filter-object.service';

@Component({
  selector: 'app-search-filter',
  imports: [
    TranslatePipe,
    FormsModule
  ],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.css'
})
export class SearchFilterComponent {

  private readonly filterObjectService: FilterObjectService = inject (FilterObjectService); // Filter

  inputSearch(searchTerm: any): void{
    // const value: string = searchTerm.value;
    this.filterObjectService.filterObject.searchTerm = searchTerm.value;
    // console.log("input", value);
    // console.log("obj", this.filterObjectService.filterObject.searchTerm);
    // console.log("obj all", this.filterObjectService.filterObject );
  }
}
