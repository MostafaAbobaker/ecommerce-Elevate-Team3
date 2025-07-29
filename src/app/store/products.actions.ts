import { createAction, props } from "@ngrx/store";
import { IItemProduct } from "../shared/components/ui/item-product/model/iitem-product";
import { SortOption } from '../features/pages/all-products/products/sort-option.enum';
import {  IFilterObj } from "../features/pages/all-products/filter/interface/filterObject";


export const getProducts = createAction(
  '[Product] load Products',
  props<{limit:number,page:number}>()
)

export const setProducts = createAction(
  '[product] set Products',
  props<{products: IItemProduct[]}>()
)


export const SortOptions = createAction(
  '[Product] Sort Products',
  props<{sortOption: SortOption}>()
)

export const filterProducts = createAction(
  '[Product] Filter Products',
  props<{filterObject: IFilterObj}>()
)
