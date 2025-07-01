import {Component, computed, effect, inject, PipeTransform, Signal} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {NgxSliderModule, Options} from '@angular-slider/ngx-slider';
import {FormsModule} from '@angular/forms';
import {CurrencyPipe} from '@angular/common';
import {FilterObjectService} from '../../service/filter-object.service';

@Component({
  selector: 'app-price-rating-filter',
  imports: [
    TranslatePipe,
    FormsModule,
    NgxSliderModule,
    CurrencyPipe
  ],
  templateUrl: './price-rating-filter.component.html',
  styleUrl: './price-rating-filter.component.css'
})
export class PriceRatingFilterComponent  {

  private readonly filterObjectService: FilterObjectService = inject(FilterObjectService);

  minValue: number = 0;
  maxValue: number = 350;
  options: Options = {
    floor: 0,
    ceil: 1000,
    step: 50,
    translate: (value: number): string => {
      return '$' + value;
    }
  };

  getProductsByPriceRange(min: any, max: any): void {

    this.filterObjectService.filterObject.price.min = min;
    this.filterObjectService.filterObject.price.max = max;

    console.log(min, max);
    console.log("obj", this.filterObjectService.filterObject.price);
    console.log("obj all", this.filterObjectService.filterObject );
  }
}
