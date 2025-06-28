import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ItemProductComponent } from '../../../../shared/components/ui/item-product/item-product.component';
import { IItemProduct } from '../../../../shared/components/ui/item-product/model/iitem-product';
import { TranslatePipe } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [ItemProductComponent, TranslatePipe, PaginatorModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [MessageService],
})
export class ProductsComponent {

  @Input()  productList: IItemProduct[] = [];
  originalProductList: IItemProduct[] = [];

  // dropdownMenu:boolean = false;
  stateSorting: string = 'Recommended';

  first: number = 0;
  rows: number = 5;


  ngOnChanges(changes: SimpleChanges) {
    if (changes['productList'] && changes['productList'].currentValue && this.originalProductList.length === 0) {
      this.originalProductList = [...this.productList];
    }
  }

  /* Sorting Function */
  sortProducts(type: string) {
    if (type === 'highLow') {
      this.productList.sort((a, b) => b.price - a.price);
      this.stateSorting = 'High to Low';
    } else if (type === 'lowHigh') {
      this.productList.sort((a, b) => a.price - b.price);
      this.stateSorting = 'Low to High';
    } else {
      // Implement recommended or default sorting if needed
      // Reset to original order
      this.productList = [...this.originalProductList];
      this.stateSorting = 'Recommended';
    }
  }

  onPageChange(event: PaginatorState) {
    // Update the paginator state
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 5;
  }
}
