import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { IResponseReview } from '../../models/product-details';
import { CommonModule } from '@angular/common';
import { ProductDetailsService } from '../../services/product-details.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-reviews',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-reviews.component.html',
  styleUrl: './product-reviews.component.css',
  providers:[MessageService]
})
export class ProductReviewsComponent implements OnInit, OnDestroy {

  productId!: string
  reviewsForm!: FormGroup
  subscription: Subscription = new Subscription
  productList!: IResponseReview[]
  reviewsList!: IResponseReview[]
  productRatie!: number

  private _productDetailsService = inject(ProductDetailsService)
  private _activatedRoute = inject(ActivatedRoute)
  private messageService = inject(MessageService)

  ngOnInit(): void {
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
    this.subscription = this._productDetailsService.addReviewsProduct(this.reviewsForm.value).subscribe({
      next: (res) => {
        this.reviewsList = res
      }
    })
  }

  // get review
  getReviewsProduct(id: string) {
    this._productDetailsService.getReviewsProduct(id).subscribe({
      next: (res) => {
        this.productList = res
        this.productRatie = res.reviews.rating
      }, error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message });
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
