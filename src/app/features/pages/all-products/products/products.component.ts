import {Component, inject, OnInit} from '@angular/core';
import {ItemProductComponent} from '../../../../shared/components/ui/item-product/item-product.component';
import {IItemProduct} from '../../../../shared/components/ui/item-product/model/iitem-product';
import {NotFoundComponent} from '../../../../shared/components/ui/not-found/not-found.component';
import {FilterObjectService} from '../filter/service/filter-object.service';

@Component({
  selector: 'app-products',
  imports: [
    ItemProductComponent,
    NotFoundComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  private readonly filterObjectService: FilterObjectService = inject(FilterObjectService);

  products: IItemProduct[] = [];

  ngOnInit(): void {
    this.products = this.filterObjectService.filterObject.products;
    console.log("ProductsComponent" ,this.products);
    console.log("obj all", this.filterObjectService.filterObject );
  }
}
