import { Component, model, inject, OnInit, Pipe, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductDetails, IResponseProductDetails } from './models/product-details';
import { ButtonModule } from 'primeng/button';
import { DecimalPipe } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { ProductReviewsComponent } from "./components/product-reviews/product-reviews.component";
import { RelatedProductsComponent } from "./components/related-products/related-products.component";
import { ProductDetailsService } from './services/product-details.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  imports: [ButtonModule, DecimalPipe, BadgeModule, ProductReviewsComponent, RelatedProductsComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  providers: []
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  productId!: string
  productList!: IProductDetails
  selectedImage: string = ''
  subscription:Subscription = new Subscription
  private _activatedRoute = inject(ActivatedRoute)
  private _productDetailsService = inject(ProductDetailsService)

  ngOnInit(): void {
    this.productId = this._activatedRoute.snapshot.params['id']
    this.getProductById(this.productId)
    console.log(this.productId);
  }

  getProductById(id: string) {
    this.subscription = this._productDetailsService.getSpecificProducts(id).subscribe({
      next: (res) => {
        this.productList = res.product
        this.selectedImage = this.productList.imgCover
      }, error: (err) => {

      }, complete: () => {

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
