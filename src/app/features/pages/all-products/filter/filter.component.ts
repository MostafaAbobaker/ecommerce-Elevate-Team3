import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
import {SearchFilterComponent} from './Components/search-filter/search-filter.component';
import { OccasionsComponent } from './Components/occasions/occasions.component';
import { RatingsFilterComponent } from "./Components/ratings-filter/ratings-filter.component";
import { CategoryFilterComponent } from './Components/category-filter/category-filter.component';
import { PriceRatingFilterComponent } from './Components/price-rating-filter/price-rating-filter.component';

@Component({
  selector: 'app-filter',
  imports: [CommonModule, SearchFilterComponent, CategoryFilterComponent, PriceRatingFilterComponent, OccasionsComponent, RatingsFilterComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

}
