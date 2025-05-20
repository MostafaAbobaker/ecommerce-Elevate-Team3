import { Component, Input } from '@angular/core';
import { IProduct } from '../../../interfaces/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-product',
  imports: [CommonModule],
  templateUrl: './item-product.component.html',
  styleUrl: './item-product.component.css'
})
export class ItemProductComponent {

  @Input() item!:IProduct
}
