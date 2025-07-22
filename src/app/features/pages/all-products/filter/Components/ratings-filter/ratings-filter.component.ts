import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { FilterObjectService } from '../../service/filter-object.service';
import { FilterOjectService } from '../../service/filter-oject.service';

@Component({
  selector: 'app-ratings-filter',
  imports: [TranslatePipe],
  templateUrl: './ratings-filter.component.html',
  styleUrl: './ratings-filter.component.css'
})
export class RatingsFilterComponent {

  private readonly filterObjectService: FilterOjectService = inject(FilterOjectService); // Filter

  checkBoxSelected(rating: number): void {
    const filter = this.filterObjectService.currentFilter.ratings
    if (!filter.some(item => item == rating)) {
      this.filterObjectService.addRating(rating);
    } else {
      this.filterObjectService.removeRating(rating)
    }
    console.log(this.filterObjectService.currentFilter);
  }
}
