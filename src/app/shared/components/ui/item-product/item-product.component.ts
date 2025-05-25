import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../../../features/interfaces/iproduct';

@Component({
  selector: 'app-item-product',
  imports: [CommonModule],
  templateUrl: './item-product.component.html',
  styleUrl: './item-product.component.css'
})
export class ItemProductComponent {

  @Input() item: IProduct = {} as IProduct;
}
