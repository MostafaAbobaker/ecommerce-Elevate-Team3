import { createReducer, on } from "@ngrx/store";
import { IItemProduct } from "../shared/components/ui/item-product/model/iitem-product";
import * as ProductsActions from './products.actions';
import { SortOption } from "../features/pages/all-products/products/sort-option.enum";

export interface ProductsState {
  products: IItemProduct[];
  loading: boolean;
  error: string | null;
  pagination:{
    limit:number;
     page:number;
  }
  sortOption: SortOption,

}

export const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  pagination:{
    limit:0,
    page:0
  },
  sortOption: SortOption.NameRecommended,
};

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.loadProducts, (state,{ limit, page}) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ProductsActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false
  })),
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(ProductsActions.setSortOption, (state, { sortOption }) => ({
    ...state,
    sortOption,
  })),
);
