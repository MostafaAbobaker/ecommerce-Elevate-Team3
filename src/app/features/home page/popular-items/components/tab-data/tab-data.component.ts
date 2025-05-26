import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Carousel} from 'primeng/carousel';
import {TabsComponent} from '../tabs/tabs.component';
import {Categories} from '../../../categories/model/categories';
import {CategoriesService} from '../../../categories/service/categories.service';

@Component({
  selector: 'app-tab-data',
  imports: [
    TabsComponent,
    Carousel
  ],
  templateUrl: './tab-data.component.html',
  styleUrl: './tab-data.component.css'
})
export class TabDataComponent implements OnInit, OnDestroy{

  private readonly categoriesService: CategoriesService = inject (CategoriesService);
  private getAllCategoriesService!: Subscription;

  categories: Categories [] = [];
  responsiveOptions: any[] | undefined;

  ngOnInit(): void {
    this.getCategory();
    this.responsiveOption();
  }

  responsiveOption (): void{
    this.responsiveOptions = [
      {
        breakpoint: '2500px',
        numVisible: this.categories.length,
        numScroll: 1
      },
      {
        breakpoint: '2000px',
        numVisible: this.categories.length,
        numScroll: 1
      },
      {
        breakpoint: '1920px',
        numVisible: this.categories.length,
        numScroll: 1
      },
      {
        breakpoint: '1600px',
        numVisible: this.categories.length,
        numScroll: 1
      },
      {
        breakpoint: '1400px',
        numVisible: 10,
        numScroll: 1
      },
      {
        breakpoint: '1200px',
        numVisible: 9,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 9,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 8,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 5,
        numScroll: 1
      }
    ]
  }

  getCategory(): void{
    this.getAllCategoriesService = this.categoriesService.getAllCategories().subscribe({
      next: (data: any): void => {
        this.categories = data.categories;
      }
    })
  }

  ngOnDestroy(): void {
    this.getAllCategoriesService.unsubscribe();
  }
}
