import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemProductComponent } from "../../../../shared/components/ui/item-product/item-product.component";
import { IItemProduct } from '../../../../shared/components/ui/item-product/model/iitem-product';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../homePage/popular-items/service/products.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-products',
  imports: [ItemProductComponent, TranslateModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [MessageService]
})
export class ProductsComponent implements OnInit, OnDestroy {

  productList: IItemProduct[] = [];
  private getProductsService!: Subscription

  constructor(
    private _productsService: ProductsService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this.getProductsService = this._productsService.getAllCategories().subscribe({
      next: (res) => {
        this.productList = res.products;
        console.log(res);

      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message });

      },
    });
  }
  ngOnDestroy(): void {
    this.getProductsService.unsubscribe();
  }


}
