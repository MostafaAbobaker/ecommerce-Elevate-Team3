import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductsService } from '../shared/services/getProducts/products.service';
import * as ProductsActions from './products.actions';



@Injectable()
export class ProductsEffects {

    private actions$ = inject(Actions);
    private productsService = inject(ProductsService);


  loadProducts$ = createEffect(() =>{
    return this.actions$.pipe(
      ofType('[Products] Load Products'),
      exhaustMap(({ limit, page }) => this.productsService.getAllProducts(limit, page)
      .pipe(
          map(response => ({type:'[Products] Load Products Success',
              products: response.products,
            })
          ),
          catchError((error) =>
            of(ProductsActions.loadProductsFailure({ error: error.message }))
          )
        )
      )
    )
  });


}
