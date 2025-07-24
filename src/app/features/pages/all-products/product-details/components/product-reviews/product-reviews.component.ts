import { Component, inject, Input, input, OnDestroy, OnInit } from '@angular/core';
import { IProductDetails, IResponseProductDetails } from '../../models/product-details';
import { CommonModule } from '@angular/common';
import { ProductDetailsService } from '../../services/product-details.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-reviews',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-reviews.component.html',
  styleUrl: './product-reviews.component.css'
})
export class ProductReviewsComponent implements OnInit, OnDestroy {

  productId!: string
  reviewsForm!: FormGroup
  subscription: Subscription = new Subscription
  productList: any[] = []
  reviewsList: any[] = []

  @Input() productDetails: IProductDetails = {} as IProductDetails;
  productRatie!: number

  private _productDetailsService = inject(ProductDetailsService)
  private _activatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    this.productRatie = this.productDetails?.rateAvg;

    this.productId = this._activatedRoute.snapshot.params['id']
    this.getReviewsProduct(this.productId)

    this.initForm()
  }

  // Add Reviews
  initForm() {
    this.reviewsForm = new FormGroup({
      product: new FormControl(this.productId, [Validators.required]),
      rating: new FormControl(null, [Validators.required]),
      title: new FormControl(null, [Validators.required]),
      comment: new FormControl(null, [Validators.required]),
    })
  }

  submitReviews() {
    console.log(this.reviewsForm);

    this.subscription = this._productDetailsService.addReviewsProduct(this.reviewsForm.value).subscribe({
      next: (res) => {
        this.reviewsList = res
        console.log(res);
      }
    })
  }

  getReviewsProduct(id: string) {
    this._productDetailsService.getReviewsProduct(id).subscribe({
      next: (res) => {
        this.productList = res
        console.log(this.productList);

      }, error: (err) => {

      }, complete: () => {

      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
