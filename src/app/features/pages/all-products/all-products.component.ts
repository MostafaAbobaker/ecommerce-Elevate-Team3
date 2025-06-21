import { Component } from '@angular/core';
import { FilterComponent } from './filter/filter.component';
import { ProductsComponent } from "./products/products.component";

@Component({
  selector: 'app-all-products',
  imports: [FilterComponent, ProductsComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {

}
