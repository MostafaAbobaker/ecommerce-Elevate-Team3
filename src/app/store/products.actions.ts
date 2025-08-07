import { createAction, props } from "@ngrx/store";
import { IItemProduct } from "../shared/components/ui/item-product/model/iitem-product";
import { SortOption } from '../features/pages/all-products/products/sort-option.enum';
import {  IFilterObj } from "../features/pages/all-products/filter/interface/filterObject";

/* Add parameters to call endpoint */
export const getProducts = createAction(
  '[Product] load Products',
  props<{limit:number,page:number}>()
)

/* Action To Assign Products has get api to products in store */
export const setProducts = createAction(
  '[product] set Products',
  props<{products: IItemProduct[]}>()
)
/* Action To Failure Or Error massage */
export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: string }>()
);

/* Actions  To Sorting Products  */
export const SortOptions = createAction(
  '[Product] Sort Products',
  props<{sortOption: SortOption}>()
)


/* Actions  To Filter Products  */
export const filterProducts = createAction(
  '[Product] Filter Products',
  props<{filterObject: IFilterObj}>()
)
