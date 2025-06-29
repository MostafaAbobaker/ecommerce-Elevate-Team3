import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './service/products.service';
import { Subscription } from 'rxjs';
import { IItemProduct } from '../../../shared/components/ui/item-product/model/iitem-product';
import { CommonModule } from '@angular/common';
import { IFilterObj } from './model/ifilter-obj';
import { FilterComponent } from './filter/filter.component';
import { TestFilterComponent } from './test-filter/test-filter.component';

@Component({
  selector: 'app-all-products',
  imports: [ ProductsComponent, CommonModule, TestFilterComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit, OnDestroy {
  allProducts:IItemProduct[] = [];

  private getProductsService!: Subscription

  constructor(private _productsService: ProductsService,
) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this.getProductsService = this._productsService.getAllProducts().subscribe({
      next: (res) => {
        this.allProducts = res.products;

      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
    });
  }

 /* onFilterChange(filter: IFilterObj) {
  // Do something with the filter object
  console.log('Filter from parent:', filter);
} */

  ngOnDestroy(): void {
    this.getProductsService.unsubscribe();
  }
}
