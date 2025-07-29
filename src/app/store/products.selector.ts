import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productState } from './product.state';


export const selectProductsState = createFeatureSelector<productState>('products');

export const selectAllProducts = createSelector(
  selectProductsState,
  (state: productState) => state.products
)

export const selectSortedProducts = createSelector(
  selectProductsState,
  (state: productState) => {
    return [...state.products].sort((a, b) => {
      switch (state.SortOption) {
        case 'priceAsc':
          return a.price - b.price;
        case 'priceDesc':
          return b.price - a.price;
        case 'nameAsc':
          return a.title.localeCompare(b.title);
        case 'nameDesc':
          return b.title.localeCompare(a.title);
        default:
          return 0; // No sorting
      }
    });
  })
