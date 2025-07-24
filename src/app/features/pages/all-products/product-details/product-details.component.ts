import { Component, model, inject, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductDetails, IResponseProductDetails } from './models/product-details';
import { ButtonModule } from 'primeng/button';
import { DecimalPipe } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { ProductReviewsComponent } from "./components/product-reviews/product-reviews.component";
import { RelatedProductsComponent } from "./components/related-products/related-products.component";
import { ProductDetailsService } from './services/product-details.service';

@Component({
  selector: 'app-product-details',
  imports: [ButtonModule, DecimalPipe, BadgeModule, ProductReviewsComponent, RelatedProductsComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  providers: []
})
export class ProductDetailsComponent implements OnInit {

  productId!: string
  // productDetails!: IResponseProductDetails
  productList!: IProductDetails
  selectedImage: string = ''
  private _activatedRoute = inject(ActivatedRoute)
  private _productDetailsService = inject(ProductDetailsService)

  ngOnInit(): void {
    this.productId = this._activatedRoute.snapshot.params['id']
    this.getProductById(this.productId)
    console.log(this.productId);
  }

  getProductById(id: string) {
    this._productDetailsService.getSpecificProducts(id).subscribe({
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

}
