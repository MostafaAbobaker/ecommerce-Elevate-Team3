import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { IProductDetails, IRelatedProduct } from '../../models/product-details';
import { CommonModule } from '@angular/common';
import { ProductDetailsService } from '../../services/product-details.service';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-related-products',
  imports: [CommonModule, CarouselModule],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.css',
  providers:[MessageService]
})
export class RelatedProductsComponent implements OnInit, OnDestroy {

  productId!: string
  productList: IRelatedProduct[] = []
  subscription:Subscription = new Subscription

  @Input() productDetails: IProductDetails = {} as IProductDetails
  private _productDetailsService = inject(ProductDetailsService)
  private _activatedRoute = inject(ActivatedRoute)
  private messageService = inject(MessageService)

  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 4,
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

  ngOnInit(): void {
    this.productId = this._activatedRoute.snapshot.params['id']
    this.getRelatedProduct(this.productId)
  }

  getRelatedProduct(id: string) {
    this.subscription = this._productDetailsService.getRelatedProducts(id).subscribe({
      next: (res) => {
        this.productList = res.relatedProducts;        
      }, error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message });
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
