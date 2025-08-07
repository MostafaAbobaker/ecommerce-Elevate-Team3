import { createReducer, on } from "@ngrx/store";
import * as ProductsActions from './products.actions';
import { initialState } from "./product.state";
import { SortOption } from "../features/pages/all-products/products/sort-option.enum";
import { IItemProduct } from "../shared/components/ui/item-product/model/iitem-product";



export const productsReducer = createReducer(
  initialState,
  /* Action to load products */
  on(ProductsActions.getProducts, (state, { limit, page }) =>  ({
    ...state,
    loading: true,
    error: null,
  })),
  /* Action to set products */
  on(ProductsActions.setProducts, (state, { products }) => ({
    ...state,
    products: products,
    productOrigin: products, // Store original products for filtering and sorting
    loading: false,
  })),
  /* Action to handle loading failure */
  on(ProductsActions.loadProductsFailure, (state, { error }) =>
  ({
    ...state,
    loading: false,
    error: error
  })),

  /* Action to sort products */
  on(ProductsActions.SortOptions, (state, { sortOption }) => ({
    ...state,
    products: sortProducts(state.productOrigin, sortOption)
  })),


  /* Action to filter products */
  on(ProductsActions.filterProducts, (state, { filterObject }) => {

    const filteredProducts = state.productOrigin.filter(product => {

    const matchesTextSearch = filterObject.textSearch.length === 0 || product.title.toLowerCase().includes(filterObject.textSearch.toLowerCase())
    const matchesCategories = filterObject.Categories.length === 0 || filterObject.Categories.includes(product.category);
    const matchesOccasions = filterObject.occasions.length === 0 || filterObject.occasions.includes(product.occasion);
    const matchesRating =filterObject.rating === 0 || filterObject.rating == product.rateAvg ;
    // const matchesRating = filterObject.rating.length === 0 || filterObject.rating.includes(product.rateAvg);
    const matchesPriceRange = product.price >= filterObject.priceRange[0] && product.price <= filterObject.priceRange[1];
      return (
        matchesTextSearch
        && matchesCategories &&
        matchesOccasions &&
        matchesRating &&
        matchesPriceRange
      );
    });

    return {
      ...state,
      products: filteredProducts,
    };
  })


);


/**
 * Function to sort products based on the selected sort option.
 * @param products - Array of products to be sorted.
 * @param sortOption - The selected sort option.
 * @returns Sorted array of products.
 */
function sortProducts(products: IItemProduct[], sortOption: SortOption) {

  let sortedProducts
  sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case SortOption.PriceAsc:
        return a.price - b.price;
      case SortOption.PriceDesc:
        return b.price - a.price;
      case SortOption.NameAsc:
        return a.title.localeCompare(b.title);
      case SortOption.NameDesc:
        return b.title.localeCompare(a.title);
      default:
        return 0; // No sorting
    }

  });

  return sortedProducts;

}
