import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productState } from './product.state';


export const selectProductsState = createFeatureSelector<productState>('products');

export const selectAllProducts = createSelector(
  selectProductsState,
  (state) => state.products
);


export const selectProductsLoading = createSelector(
  selectProductsState,
  (state) => state.loading
);

export const selectProductsError = createSelector(
  selectProductsState,
  (state) => state.error
);

/* export const selectPagination = createSelector(
  selectProductsState,
  (state) => state.pagination
); */
/* export const selectLimit = createSelector(
  selectPagination,
  (pagination) => pagination.limit
);
export const selectCurrentPage = createSelector(
  selectPagination,
  (pagination) => pagination.page
); */
