import {IItemProduct} from '../../../../../shared/components/ui/item-product/model/iitem-product';
import { IOccasions } from '../../../../../shared/interfaces/IOccasions/ioccasions';
import {Categories} from '../../../homePage/categories/model/categories';

export interface FilterObject {
  searchTerm: string,
  category: Categories[],
  products: IItemProduct[],
  occasions: IOccasions[],
  ratings: number,
  price: {
    min: number,
    max: number,
  };
}
export interface IFilterObj {
  textSearch: string,
  Categories: string[],
  occasions: string[],
  priceRange: [number, number],
  rating: number,
}
