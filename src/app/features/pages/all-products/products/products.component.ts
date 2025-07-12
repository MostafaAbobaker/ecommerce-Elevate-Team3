import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

/* Import Interface */
import { SortOption } from './sort-option.enum';
import { IItemProduct } from '../../../../shared/components/ui/item-product/model/iitem-product';
import { NotFoundComponent } from '../../../../shared/components/ui/not-found/not-found.component';
import { ItemProductComponent } from '../../../../shared/components/ui/item-product/item-product.component';

/* Import Prime NG */
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown'; // ✅ PrimeNG Dropdown
import { PaginatorModule } from 'primeng/paginator';

/* Import Store NGRX */
import { Store } from '@ngrx/store';
import { loadProducts } from '../../../../store/products.actions';
import * as ProductsSelector from '../../../../store/products.selector';

@Component({
  selector: 'app-products',
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    ItemProductComponent,
    PaginatorModule,
    NotFoundComponent,
    TranslatePipe,
    AsyncPipe,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [MessageService],
})
export class ProductsComponent implements OnInit {
  products$: Observable<IItemProduct[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  productsItems$: IItemProduct[] = [];
  OriginProducts: IItemProduct[] = [];

  sortOptions = [
    { label: 'Recommended', value: SortOption.NameRecommended },
    { label: 'Price: Low to High', value: SortOption.PriceAsc },
    { label: 'Price: High to Low', value: SortOption.PriceDesc },
    { label: 'Name: A to Z', value: SortOption.NameAsc },
    { label: 'Name: Z to A', value: SortOption.NameDesc },
  ];

  selectedSort = this.sortOptions[0].value;
  totalRecords: number = 0;
  first: number = 0;
  page: number = 0;
  rows: number = 6;

  constructor(private store: Store) {

    this.products$ = this.store.select(ProductsSelector.selectAllProducts).pipe(
      map((products) => {
        this.productsItems$ = products;
        this.totalRecords = products.length;
        return products;
      })
    );

    this.loading$ = this.store.select(ProductsSelector.selectProductsLoading);
    this.error$ = this.store.select(ProductsSelector.selectProductsError);
  }

  ngOnInit() {
    this.store.dispatch(loadProducts());
  }

  onSortChange(sortValue: SortOption): void {
    debugger;
    switch (sortValue) {
      case SortOption.PriceAsc:
        this.productsItems$.sort((a, b) => a.price - b.price);
        break;
      case SortOption.PriceDesc:
        this.productsItems$.sort((a, b) => b.price - a.price);
        break;
      case SortOption.NameAsc:
        this.productsItems$.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case SortOption.NameDesc:
        this.productsItems$.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case SortOption.NameRecommended:
        this.productsItems$ = this.OriginProducts;
        break;
    }

    // Force detection if needed
    this.productsItems$ = this.productsItems$.map((p) => ({ ...p }));
    this.getPaginatedProducts(this.productsItems$);
  }

  // pagination
  onPageChange(event: any) {
    this.first = event.first ?? 0;
    this.page = event.page ?? 10;
    this.rows = event.rows;
    this.getPaginatedProducts(this.productsItems$, this.rows);
  }
  getPaginatedProducts(products: IItemProduct[],rows?: number): IItemProduct[] {
    return products.slice(this.first, this.first + this.rows);
  }
}
