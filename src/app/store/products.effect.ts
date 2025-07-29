import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ProductsService } from '../shared/services/getProducts/products.service';
import * as ProductAction from './products.actions'
@Injectable()
export class ProductsEffects {
    private readonly actions$ = inject(Actions);
    private readonly _productsService = inject(ProductsService);

    loadProducts$ = createEffect( () =>
      this.actions$.pipe(
        ofType(ProductAction.getProducts),
        switchMap(action => this._productsService.getAllProducts(action.limit, action.page).pipe(
          map(data => ProductAction.setProducts({products : data.products}))
        ))
      ))

}
