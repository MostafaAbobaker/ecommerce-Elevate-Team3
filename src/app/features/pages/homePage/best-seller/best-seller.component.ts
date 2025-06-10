import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ItemProductComponent } from '../../../../shared/components/ui/item-product/item-product.component';
import { IProduct } from '../../../interfaces/iproduct';
import { BestSellerService } from './services/best-seller.service';

@Component({
  selector: 'app-best-seller',
  imports: [CommonModule, ItemProductComponent, CarouselModule, ToastModule],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.css',
  providers: [MessageService]

})
export class BestSellerComponent implements OnInit{

    responsiveOptions: any[] | undefined;

    productsList:IProduct[] = []

  /* productsList = [
    {
      image:'../../../../assets/imgs/products/1.png',
      status:'New',
      title:'Special Gift Box',
      rating:4,
      newPrice: 250,
      oldPrice:350,
      id:1,
    },
    {
      image:'../../../../assets/imgs/products/2.png',
      status:'Out Of Stock',
      title:'Special Gift Box',
      rating:3,
      newPrice: 250,
      oldPrice:0,
      id:2,
    },
    {
      image:'../../../../assets/imgs/products/3.png',
      status:'Hot',
      title:'Special Gift Box',
      rating:2,
      newPrice: 250,
      oldPrice:0,
      id:3,
    },
    {
      image:'../../../../assets/imgs/products/1.png',
      status:'New',
      title:'Special Gift Box',
      rating:4,
      newPrice: 250,
      oldPrice:350,
      id:1,
    },
    {
      image:'../../../../assets/imgs/products/2.png',
      status:'Out Of Stock',
      title:'Special Gift Box',
      rating:3,
      newPrice: 250,
      oldPrice:0,
      id:2,
    },
    {
      image:'../../../../assets/imgs/products/3.png',
      status:'Hot',
      title:'Special Gift Box',
      rating:2,
      newPrice: 250,
      oldPrice:0,
      id:3,
    },
    {
      image:'../../../../assets/imgs/products/1.png',
      status:'New',
      title:'Special Gift Box',
      rating:4,
      newPrice: 250,
      oldPrice:350,
      id:1,
    },
    {
      image:'../../../../assets/imgs/products/2.png',
      status:'Out Of Stock',
      title:'Special Gift Box',
      rating:3,
      newPrice: 250,
      oldPrice:0,
      id:2,
    },
    {
      image:'../../../../assets/imgs/products/3.png',
      status:'Hot',
      title:'Special Gift Box',
      rating:2,
      newPrice: 250,
      oldPrice:0,
      id:3,
    },
  ] */

  constructor(private _bestSellerService:BestSellerService , private messageService: MessageService) { }
   ngOnInit(): void {
    this.setResponsiveOptions();
    this.getBestSellers();
  }

  setResponsiveOptions() {
    this.responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1
            }
        ]
  }

  getBestSellers() {
    this._bestSellerService.getBestSellers().subscribe({
      next: (response) => {
        this.productsList = response.bestSeller as IProduct[];
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message });

      }
    });
  }
}
