import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CategoryCardComponent} from './components/category-card/category-card.component';
import {Categories} from './model/categories';
import {CategoriesService} from './service/categories.service';
import {Carousel} from 'primeng/carousel';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-categories',
  imports: [
    CategoryCardComponent,
    Carousel,
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit, OnDestroy{

  private readonly categoriesService: CategoriesService = inject(CategoriesService);
  private getAllCategoriesService!: Subscription;

  categories: Categories [] = [];
  responsiveOptions: any[] | undefined;

  ngOnInit(): void {
    this.getAllCategories();
    this.responsiveOption();
  }

  responsiveOption (): void{
    this.responsiveOptions = [
      {
        breakpoint: '2500px',
        numVisible: this.categories.length,
        numScroll: 2
      },
      {
        breakpoint: '2000px',
        numVisible: 8,
        numScroll: 1
      },
      {
        breakpoint: '1920px',
        numVisible: 8,
        numScroll: 1
      },
      {
        breakpoint: '1600px',
        numVisible: 7,
        numScroll: 1
      },
      {
        breakpoint: '1400px',
        numVisible: 6,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 4,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 2,
        numScroll: 1
      }
    ]
  }

  getAllCategories (): void {
    this.getAllCategoriesService = this.categoriesService.getAllCategories().subscribe({

      next: (data: any): void => {
        this.categories = data.categories;
        this.categories = this.categories.slice(0, 8);
        console.log('=> ',data);

      }
    })
  }

  ngOnDestroy(): void {
    this.getAllCategoriesService.unsubscribe();
  }
}
