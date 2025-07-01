import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
import {SearchFilterComponent} from './Components/search-filter/search-filter.component';
import {CategoryFilterComponent} from './Components/category-filter/category-filter.component';
import {PriceRatingFilterComponent} from './Components/price-rating-filter/price-rating-filter.component';

@Component({
  selector: 'app-filter',
  imports: [CommonModule, SearchFilterComponent, CategoryFilterComponent, PriceRatingFilterComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

}
