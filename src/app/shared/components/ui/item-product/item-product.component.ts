import {Component, inject, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IItemProduct } from './model/iitem-product';
import { RouterLink } from '@angular/router';
import {LocalStorageService} from '../../../services/localStorage/local-storage.service';
import {Router} from '@angular/router';
import {CartService} from '../../../../features/pages/cart/service/cart.service';
import {Toast} from 'primeng/toast';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-item-product',
  imports: [CommonModule, Toast, RouterLink],
  templateUrl: './item-product.component.html',
  styleUrl: './item-product.component.css',
  providers: [MessageService]
})
export class ItemProductComponent {

  // @Input() item: IProduct = {} as IProduct;
  @Input() popularItem: IItemProduct = {} as IItemProduct;

  private readonly router: Router = inject(Router);
  private readonly localStorage: LocalStorageService = inject(LocalStorageService);
  private readonly cartService: CartService = inject(CartService);
  private readonly messageService: MessageService = inject(MessageService);

  addToCart(productID: string, quantity: number): void {

    if(this.localStorage.getItem('token')){

      console.log(this.localStorage.getItem('token'));
      console.log(productID);
      console.log(quantity);

      if(quantity > 0){
        this.show("Success")
        this.cartService.addProductToCart(productID, quantity);
      }
      else {
        this.show("")
      }
    }else{
      this.router.navigate(['/signin']);
    }
  }


  show(statusForm: string): void {
    if(statusForm === "Success"){
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Success' });
    }else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Can not to add this product it is out of stock' });
    }
  }
}
