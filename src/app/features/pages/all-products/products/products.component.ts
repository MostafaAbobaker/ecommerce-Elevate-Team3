import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { Subscription } from 'rxjs';
import { IItemProduct } from '../../../../shared/components/ui/item-product/model/iitem-product';
import { TranslatePipe } from '@ngx-translate/core';
import { ItemProductComponent } from '../../../../shared/components/ui/item-product/item-product.component';

@Component({
  selector: 'app-products',
  imports: [TranslatePipe,ItemProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
    private getPopularItemsService!: Subscription;
        productsItems:IItemProduct []  = [];

  constructor(    private _productsService: ProductsService,
){}
  ngOnInit(): void {
    this.getProducts()
  }
  getProducts() {
    this.getPopularItemsService = this._productsService.getProducts().subscribe({
        next: (res) => {
          this.productsItems = res.products;
        },
        error: (err) => {
          // this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message });

        },
      });
  }
}
