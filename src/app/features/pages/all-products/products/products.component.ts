import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemProductComponent } from '../../../../shared/components/ui/item-product/item-product.component';
import { IItemProduct } from '../../../../shared/components/ui/item-product/model/iitem-product';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';
import { ProductsService } from './services/products.service';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown'; // ✅ PrimeNG Dropdown
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CommonModule, DropdownModule, FormsModule, ItemProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [MessageService],
})
export class ProductsComponent implements OnDestroy, OnInit {
  productsItems: IItemProduct[] = [];
  private getProducts!: Subscription;

  // PrimeNG Dropdown
  sortOptions = [
    { label: 'Price: Low to High', value: 'priceAsc' },
    { label: 'Price: High to Low', value: 'priceDesc' },
    { label: 'Name: A to Z', value: 'nameAsc' },
    { label: 'Name: Z to A', value: 'nameDesc' },
  ];

  selectedSort: string = '';
  limit: number = 10;
  constructor(
    private _productsService: ProductsService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getAllProducts(this.limit);
  }

  getAllProducts(limit: number) {
    this.getProducts = this._productsService.getAllProducts(limit).subscribe({
      next: (res) => {
        this.productsItems = res.products;
        console.log(this.productsItems);
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.message,
        });
      },
    });
  }


  onSortChange(sortValue: string): void {
    switch (sortValue) {
      case 'priceAsc':
        this.productsItems.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        this.productsItems.sort((a, b) => b.price - a.price);
        break;
      case 'nameAsc':
        this.productsItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'nameDesc':
        this.productsItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    // Force detection if needed
    this.productsItems = this.productsItems.map((p) => ({ ...p }));
    console.log(
      'Sorted Products:',
      this.productsItems.map((p) => p.price)
    );
  }

  ngOnDestroy(): void {
    if (this.getProducts) {
      this.getProducts.unsubscribe();
    }
  }
}
