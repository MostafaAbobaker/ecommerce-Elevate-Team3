import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemProductComponent } from '../../../../shared/components/ui/item-product/item-product.component';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';
import { ProductsService } from './services/products.service';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown'; // ✅ PrimeNG Dropdown
import { FormsModule } from '@angular/forms';
import { SortOption } from './sort-option.enum';
import { TranslatePipe } from '@ngx-translate/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { IResponse } from '../../homePage/popular-items/model/iresponse';
import { IItemProduct } from '../../../../shared/components/ui/item-product/model/iitem-product';

@Component({
  selector: 'app-products',
  imports: [CommonModule, DropdownModule, FormsModule, ItemProductComponent, TranslatePipe, PaginatorModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [MessageService],
})
export class ProductsComponent implements OnDestroy, OnInit {

  products!: IResponse;
  productsItems: IItemProduct[] = [];
  private getProducts!: Subscription;

  sortOptions = [
    { label: 'Price: Low to High', value: SortOption.PriceAsc },
    { label: 'Price: High to Low', value: SortOption.PriceDesc },
    { label: 'Name: A to Z', value: SortOption.NameAsc },
    { label: 'Name: Z to A', value: SortOption.NameDesc },
  ];

  selectedSort: SortOption | '' = '';

  page: number = 0;
  limit: number = 6;
  constructor(
    private _productsService: ProductsService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getAllProducts(this.limit, this.page);
  }

  getAllProducts(limit: number, page: number) {
    this.getProducts = this._productsService.getAllProducts(limit, page).subscribe({
      next: (res) => {
        this.products = res;
        this.productsItems = this.products.products;
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


  onSortChange(sortValue: SortOption): void {
    switch (sortValue) {
      case SortOption.PriceAsc:
        this.productsItems.sort((a, b) => a.price - b.price);
        break;
      case SortOption.PriceDesc:
        this.productsItems.sort((a, b) => b.price - a.price);
        break;
      case SortOption.NameAsc:
        this.productsItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case SortOption.NameDesc:
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

  // pagination
  onPageChange(event: any) {
    const page = event.page + 1;
    const limit = event.rows;
    this.getAllProducts(limit, page)
  }

  ngOnDestroy(): void {
    if (this.getProducts) {
      this.getProducts.unsubscribe();
    }
  }
}
