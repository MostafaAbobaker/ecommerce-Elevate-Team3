import {Component, computed, effect, inject, OnDestroy, OnInit, Signal} from '@angular/core';
import {ValueOfTapService} from '../../service/value-of-tabs/value-of-tap.service';
import { TabsModule } from 'primeng/tabs';
import {PopularItemsService} from '../../service/popular-API/popular-items.service';
import {MainCardComponent} from '../../../../../shared/components/ui/main-card/main-card.component';
import {PopularItems} from '../../model/popular-items';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-content-of-tab',
  imports: [TabsModule, MainCardComponent],
  templateUrl: './content-of-tab.component.html',
  styleUrl: './content-of-tab.component.css'
})
export class ContentOfTabComponent implements OnInit, OnDestroy{

  private readonly valueOfTapService: ValueOfTapService = inject (ValueOfTapService);
  private readonly popularItemsService: PopularItemsService = inject (PopularItemsService);
  private getPopularItemsService!: Subscription;

  valueOfTap: Signal <string> = computed((): string => this.valueOfTapService.valueOfTap());
  categoryID: Signal <string> = computed((): string => this.valueOfTapService.categoryID());

  popularItems: PopularItems [] = [];

  constructor() {
    effect((): void => {
      const currentCategoryID = this.valueOfTapService.categoryID();

      if(currentCategoryID){
        this.popularItemsService.getPopularItems(currentCategoryID).subscribe({
          next: (data: any): void => {
            this.popularItems = data.products;
          }
        });
      }
    });
  }

  ngOnInit(): void {
    this.getPopularItems();
  }

  getPopularItems (): void {
    this.getPopularItemsService = this.popularItemsService.getPopularItems(this.categoryID()).subscribe({

      next: (data: any): void => {
        this.popularItems = data.products;
      }
    })
  }

  ngOnDestroy(): void {
    this.getPopularItemsService.unsubscribe();
  }
}
