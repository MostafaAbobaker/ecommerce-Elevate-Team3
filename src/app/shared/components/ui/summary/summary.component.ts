import {Component, computed, effect, inject, OnInit, Signal} from '@angular/core';
import {CartService} from '../../../../features/pages/cart/service/cart.service';
import {resGetLoggedUserCart} from '../../../../features/pages/cart/model/cart';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-summary',
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {

  private cartService: CartService = inject(CartService);

  cartList: Signal<resGetLoggedUserCart> = computed((): resGetLoggedUserCart => this.cartService.cartList());
  totalPriceOfCart: Signal <number> = computed((): number =>
    this.cartList()?.cart?.cartItems.reduce((sum: number, item): number => sum + item.price, 0) ?? 0
  );
}

