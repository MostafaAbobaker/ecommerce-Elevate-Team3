import { createReducer, on } from "@ngrx/store";
import * as ProductsActions from './products.actions';
import { initialState } from "./product.state";



export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.getProducts, () => initialState),
  on(ProductsActions.setProducts,(state , {products}) => ({
    ...state,
    products:products,
  })),
  on(ProductsActions.SortOptions, (state, { sortOption }) => ({
    ...state,
    products: [...state.products].sort((a, b) => {
      switch (sortOption) {
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
    }),
  })),

  /* on(ProductsActions.filterProducts,(state, { filterObject }) => ({
    ...state,
    products: [...state.products].filter(product => {
      product.title.includes(filterObject.textSearch);
      debugger
      return product;
    })
  })) */
on(ProductsActions.filterProducts, (state, { filterObject }) => {

  const filteredProducts = state.products.filter(product => {


    const matchesTextSearch = product.title.toLowerCase().includes(filterObject.textSearch.toLowerCase())
    const matchesCategories =  filterObject.Categories.length === 0 || filterObject.Categories.includes(product.category);
    const matchesOccasions = filterObject.occasions.length === 0 || filterObject.occasions.includes(product.occasion);
    /*const matchesRating = filterObject.rating.length === 0 || filterObject.rating.includes(product.rateAvg);
    const matchesPriceRange = product.price >= filterObject.priceRange[0] && product.price <= filterObject.priceRange[1];
 */
    /* const matchesCategories =

    const matchesOccasions =

    const matchesRating =

    const matchesPriceRange =  */

    return (
      matchesTextSearch
      && matchesCategories &&
      matchesOccasions /*&&
      matchesRating &&
      matchesPriceRange */
    );
  });

  return {
    ...state,
    products: filteredProducts,
  };
})


);
