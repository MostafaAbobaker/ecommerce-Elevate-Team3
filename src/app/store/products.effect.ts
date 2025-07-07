import { inject, Injectable } from "@angular/core";
import { ProductsService } from "../shared/services/getProducts/products.service";
import { Actions } from "@ngrx/effects";


@Injectable()
export class ProductsEffects {
private actions$ = inject(Actions);
private _productsService = inject(ProductsService);
}
