import {inject, Injectable, OnDestroy, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Api_End_Point} from '../../../../../environments/Api_End_Point';
import {LocalStorageService} from '../../../../shared/services/localStorage/local-storage.service';
import {Router} from '@angular/router';
import {resGetLoggedUserCart} from '../model/cart';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnDestroy {

  subscription!: Subscription;
  private readonly router: Router = inject(Router);
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly localStorageService: LocalStorageService = inject(LocalStorageService);

  numberOfProductCart: WritableSignal<number> = signal <number>(0);
  cartList: WritableSignal <resGetLoggedUserCart> = signal ({} as resGetLoggedUserCart);

  getLoggedUserCart(): void {

    const token: string | null = this.localStorageService.getItem('token');

    if(token) {

      this.subscription = this.httpClient.get <resGetLoggedUserCart> (Api_End_Point.CART).subscribe({
        next:(response: resGetLoggedUserCart) => {
          // console.log(response);
          // this.cartList = response;

          this.cartList.set(response);
          // console.log(this.cartList());
          this.numberOfProductCart.set(response.numOfCartItems);
        },
        error: err => {
          // console.log(token);
          // console.log(err);
        }
      })
    }else {
      this.router.navigate(['signin']);
    }
  }

  addProductToCart(productID: string, quantity: number): void{

    const token: string | null = this.localStorageService.getItem('token');

    const payLoad = {
      product : productID,
      quantity: quantity
    }

    if(token){
      this.subscription = this.httpClient.post <resGetLoggedUserCart> (Api_End_Point.CART, payLoad).subscribe({
        next:(response: resGetLoggedUserCart) => {
          console.log(response);
          // this.cartList.set(response);
          this.cartList.set(response);
          this.numberOfProductCart.set(response.numOfCartItems);
        }, error: err => {
          // console.log(err);
        }
      });
    }
  }

  clearUserCart(): void{

    const token: string | null = this.localStorageService.getItem('token');

    if(token){
      this.subscription = this.httpClient.delete(Api_End_Point.CART).subscribe({
        next: response =>{
          this.numberOfProductCart.set(0);
          this.cartList.set({} as resGetLoggedUserCart);
        },error: err => {
          // console.log(err);
        }
      });
    }
  }

  removeSpecificProduct (productID: string): void {

    // const token: string | null = this.localStorageService.getItem('token'); Interceptor

    this.httpClient.delete <resGetLoggedUserCart> (`${Api_End_Point.CART}/${productID}`).subscribe({
      next:(response: resGetLoggedUserCart) => {
        // console.log(response);
        // this.getLoggedUserCart();
        this.numberOfProductCart.set(response.numOfCartItems);
        this.cartList.set(response);
      }
    });
  }

  updateCartProductQuantity (productID: string, quantity: number): void {

    const token: string | null = this.localStorageService.getItem('token');

    if(token){
      this.httpClient.put <resGetLoggedUserCart> (`${Api_End_Point.CART}/${productID}`, {quantity}).subscribe({
        next:(response: resGetLoggedUserCart) => {
          console.log(response);
          // this.getLoggedUserCart();
          // this.numberOfProductCart.set(response.numOfCartItems);
          this.cartList.set(response);
        },error: err => {
          console.log(err);
          console.log(`${Api_End_Point.CART}/${productID}`, {quantity});
        }
      });
    }
  }

  ngOnDestroy():void {
    if (this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
