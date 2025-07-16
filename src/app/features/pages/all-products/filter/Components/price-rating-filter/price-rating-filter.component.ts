import {Component,  inject, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {CurrencyPipe} from '@angular/common';
import { FilterOjectService } from '../../service/filter-oject.service';
import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'app-price-rating-filter',
  imports: [
    TranslatePipe,
    FormsModule,
    CurrencyPipe,
    SliderModule
  ],
  templateUrl: './price-rating-filter.component.html',
  styleUrl: './price-rating-filter.component.css'
})
export class PriceRatingFilterComponent  implements OnInit{


  private readonly filterObjectService: FilterOjectService = inject(FilterOjectService); // Filter

  rangeValues!: number[]

  ngOnInit(): void {
    this.filterObjectService.filterObject$.subscribe(filter =>
        this.rangeValues = [filter.price.min, filter.price.max ]
      )
  }

  getProductsByPriceRange(min:number= this.rangeValues[0], max: number= this.rangeValues[1]): void {
    this.filterObjectService.addPrice(min,max);
    console.log(this.filterObjectService.currentFilter);


    /* this.filterObjectService.filterObject.price.min = min;
    this.filterObjectService.filterObject.price.max = max; */

    // console.log(min, max);
    // console.log("obj", this.filterObjectService.filterObject.price);
    // console.log("obj all", this.filterObjectService.filterObject );
  }



  /*
  تفصيل بنك CIB
  // 550 year / mo - 15 mo noon  200000
  // 700 year 21 mo - 15 mo
  // 2.67 % 2 */
}
