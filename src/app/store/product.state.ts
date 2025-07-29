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
  SortOption: SortOption;
  filterOject:IFilterObj
}

export const initialState: productState = {
  message: 'string',
  metadata: {
    currentPage: 0,
    totalPages: 0,
    limit: 0,
    totalItems: 0,
  },
  products: [],
  SortOption: SortOption.NameRecommended,
  filterOject:{} as IFilterObj
}

