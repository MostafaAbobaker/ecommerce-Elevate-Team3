import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { OccasionsService } from '../../../../../../shared/services/getOccasions/occasions.service';
import { IOccasions } from '../../../../../../shared/interfaces/IOccasions/ioccasions';
import { TranslatePipe } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { FilterObjectService } from '../../service/filter-object.service';
import { FilterOjectService } from '../../service/filter-oject.service';

@Component({
  selector: 'app-occasions',
  imports: [TranslatePipe],
  templateUrl: './occasions.component.html',
  styleUrl: './occasions.component.css'
})
export class OccasionsComponent implements OnInit , OnDestroy {

    private readonly _occasionsService: OccasionsService = inject(OccasionsService); // From homePage
    private readonly filterObjectService: FilterOjectService = inject(FilterOjectService); // Filter

    private getOccasionsService!: Subscription;
    allOccasions: IOccasions [] = [];


    ngOnInit(): void {
      this.getOccasions()
    }

    getOccasions(){
      this.getOccasionsService = this._occasionsService.getAllOccasions().subscribe({
        next: (data: any): void => {
          this.allOccasions = data.occasions;
        },
        error: (error: any): void => {
          console.error('Error fetching occasions:', error);
        }
      })
    }

    checkBoxSelected(occasion: IOccasions): void {
      /* this.filterObjectService.addOccasion(occasion)
      this.filterObjectService.filterObject$.subscribe(filter => {
      console.log('🟢 Received filter:', filter);
    }); */

    const filter = this.filterObjectService.currentFilter.occasions
    if (!filter.some(item => item._id == occasion._id)) {
      this.filterObjectService.addOccasion(occasion);
    } else {
      this.filterObjectService.removeOccasion(occasion)
    }
    console.log(this.filterObjectService.currentFilter);

    }



    ngOnDestroy(): void {
      if(this.getOccasionsService){
        this.getOccasionsService.unsubscribe();
      }
    }
}
