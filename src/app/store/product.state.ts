import { IItemProduct } from "../shared/components/ui/item-product/model/iitem-product"
import { SortOption } from '../features/pages/all-products/products/sort-option.enum';
import {  IFilterObj } from "../features/pages/all-products/filter/interface/filterObject";


export interface productState {
  message: string;
  metadata: {
    currentPage: number;
    totalPages: number;
    limit: number;
    totalItems: number;
  }
  products: IItemProduct[];
  productOrigin: IItemProduct[];
  loading: boolean;
  error: string | null;
  SortOption: SortOption;
}

/* Assign a default value to initialState */
export const initialState: productState = {
  message: '',
  metadata: {
    currentPage: 0,
    totalPages: 0,
    limit: 0,
    totalItems: 0,
  },
  products: [],
  productOrigin: [],
  loading: false,
  error: null,
  SortOption: SortOption.NameDesc,

}

