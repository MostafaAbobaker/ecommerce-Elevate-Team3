import {Component, computed, inject, OnInit, Signal} from '@angular/core';
import {SummaryComponent} from '../../../shared/components/ui/summary/summary.component';
import {TranslatePipe} from '@ngx-translate/core';
import {CartService} from './service/cart.service';
import {resGetLoggedUserCart} from './model/cart';
import {MessageService} from 'primeng/api';
import {Toast} from 'primeng/toast';

@Component({
  selector: 'app-cart',
  imports: [
    SummaryComponent,
    TranslatePipe,
    Toast
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  providers: [MessageService]
})
export class CartComponent implements OnInit {

  cartService: CartService = inject(CartService);
  private readonly messageService: MessageService = inject(MessageService);
  cartList: Signal<resGetLoggedUserCart> = computed((): resGetLoggedUserCart => this.cartService.cartList());

  ngOnInit (): void {
    this.cartService.getLoggedUserCart();
  }

  clearUserCart(): void {
    this.cartService.clearUserCart();
    console.log(this.cartList())
  }

  incrementMyQuantity(productID: string, myQuantity: number, availableQuantityInStock: number): void {
    if(myQuantity >= availableQuantityInStock) {
      this.show(myQuantity, availableQuantityInStock);
    } else {
      // this.counterOfProduct += 1;
      console.log(myQuantity);
      console.log(availableQuantityInStock);
      console.log(productID);
      this.cartService.updateCartProductQuantity(productID, myQuantity);
      // console.log(availableQuantityInStock);
      // console.log(quantityOfOrder);
    }
  }

  decrementMyQuantity(productID: string, myQuantity: number): void {
    if (myQuantity < 1) {
      this.show(myQuantity, 0);
    }else {
      this.cartService.updateCartProductQuantity(productID, myQuantity);
      console.log(myQuantity);
      console.log(productID);
    }
  }

  removeSpecificProduct (productID: string): void {
    console.log(productID);
    this.cartService.removeSpecificProduct(productID);
  }


  show(myQuantity: number, availableQuantityInStock: number): void {
    if(myQuantity <= 0){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Should be the stock greater than 1'});
    }
    else if(myQuantity >= availableQuantityInStock){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Not applicable to add a quantity greater than the available quantity'});
    }
    else {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Account Is Created' });
    }
  }
}
