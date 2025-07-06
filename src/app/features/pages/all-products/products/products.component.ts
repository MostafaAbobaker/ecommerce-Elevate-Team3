import {FilterObjectService} from '../filter/service/filter-object.service';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ItemProductComponent } from '../../../../shared/components/ui/item-product/item-product.component';
import { firstValueFrom, Observable, Subscription, take } from 'rxjs';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown'; // ✅ PrimeNG Dropdown
import { FormsModule } from '@angular/forms';
import { SortOption } from './sort-option.enum';
import { IResponse } from '../../homePage/popular-items/model/iresponse';
import { IItemProduct } from '../../../../shared/components/ui/item-product/model/iitem-product';
import { ProductsService } from '../../../../shared/services/getProducts/products.service';
import { NotFoundComponent } from '../../../../shared/components/ui/not-found/not-found.component';


import { PaginatorModule } from 'primeng/paginator';
import { Store } from '@ngrx/store';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-products',
  imports: [CommonModule, DropdownModule, FormsModule, ItemProductComponent, PaginatorModule, NotFoundComponent , TranslatePipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [MessageService],
})

export class ProductsComponent implements OnDestroy, OnInit {

  products!: IResponse;
  productsItems:  IItemProduct[] = [];
  OriginProducts: IItemProduct[] = [];

  private getProducts!: Subscription;
  private readonly filterObjectService: FilterObjectService = inject(FilterObjectService);

  sortOptions = [
    { label: 'Recommended', value: SortOption.NameRecommended  },
    { label: 'Price: Low to High', value: SortOption.PriceAsc },
    { label: 'Price: High to Low', value: SortOption.PriceDesc },
    { label: 'Name: A to Z', value: SortOption.NameAsc },
    { label: 'Name: Z to A', value: SortOption.NameDesc },
  ];

  selectedSort = this.sortOptions[0].value;
  first: number = 0;
  page: number = 0;
  limit: number = 6;
  constructor(
    private _productsService: ProductsService,
    private messageService: MessageService,
    // private store:Store<{productStore:IItemProduct }>
  ) {
    /* this.store.select('productStore').pipe(take(1)).subscribe(initialState => {
      this.OriginProducts = initialState;
    }); */
  }

  ngOnInit() {
    this.getAllProducts(1000, 1);
    // this.productsItems = this.filterObjectService.filterObject.products;
    // console.log("ProductsComponent" ,this.productsItems);
    // console.log("obj all", this.filterObjectService.filterObject );

  }

  getAllProducts(limit: number, page: number) {
    this.getProducts = this._productsService.getAllProducts(limit, page).subscribe({
      next: (res) => {
        this.products = res;
        this.productsItems = this.products.products;
        this.OriginProducts = [...this.productsItems]; // Store original products for filtering
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
      case SortOption.NameRecommended:
        this.productsItems = this.OriginProducts
        break;
    }

    // Force detection if needed
    this.productsItems = this.productsItems.map((p) => ({ ...p }));
    /* console.log(
      'Sorted Products:',
      this.productsItems.map((p) => p.price)
    ); */
  }

  // pagination
  onPageChange(event: any) {
    this.first = event.first ?? 0;
    this.page = event.page ?? 10;
  }

  ngOnDestroy(): void {
    if (this.getProducts) {
      this.getProducts.unsubscribe();
    }
  }
}
