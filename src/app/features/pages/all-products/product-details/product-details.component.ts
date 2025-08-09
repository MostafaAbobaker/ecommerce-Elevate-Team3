import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductDetails } from './models/product-details';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { ProductReviewsComponent } from "./components/product-reviews/product-reviews.component";
import { RelatedProductsComponent } from "./components/related-products/related-products.component";
import { ProductDetailsService } from './services/product-details.service';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-details',
  imports: [ButtonModule, BadgeModule, ProductReviewsComponent, RelatedProductsComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  providers: [MessageService]
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  productId!: string
  productList!: IProductDetails
  selectedImage: string = ''
  subscription: Subscription = new Subscription
  private _activatedRoute = inject(ActivatedRoute)
  private _productDetailsService = inject(ProductDetailsService)
  private messageService = inject(MessageService)

  ngOnInit(): void {
    this.productId = this._activatedRoute.snapshot.params['id']
    this.getProductById(this.productId)
  }

  getProductById(id: string) {
    this.subscription = this._productDetailsService.getSpecificProducts(id).subscribe({
      next: (res) => {
        this.productList = res.product
        this.selectedImage = this.productList.imgCover
      }, error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message });
      }
    })
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
