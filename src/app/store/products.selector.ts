import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.reducer';
import { SortOption } from '../features/pages/all-products/products/sort-option.enum';


export const selectProductsState = createFeatureSelector<ProductsState>('products');

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
export const selectPagination = createSelector(
  selectProductsState,
  (state) => state.pagination
);
export const selectLimit = createSelector(
  selectPagination,
  (pagination) => pagination.limit
);
export const selectCurrentPage = createSelector(
  selectPagination,
  (pagination) => pagination.page
);

export const selectSortOption = createSelector(
  selectProductsState,
  (state) => state.sortOption
);

export const selectSortedProducts = createSelector(
  selectAllProducts,
  selectSortOption,
  (products, sortOption) => {
    const sorted = [...products];
    switch (sortOption) {
      case SortOption.PriceAsc:
        return sorted.sort((a, b) => a.price - b.price);
      case SortOption.PriceDesc:
        return sorted.sort((a, b) => b.price - a.price);
      case SortOption.NameAsc:
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case SortOption.NameDesc:
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      case SortOption.NameRecommended:
      default:
        return sorted;
    }
  }
);

