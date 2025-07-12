import { createAction, props } from "@ngrx/store";
import { IItemProduct } from "../shared/components/ui/item-product/model/iitem-product";

export const loadProducts = createAction('[Products] Load Products');

export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: IItemProduct[] }>()
);

export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: string }>()
);
