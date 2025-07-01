import {IItemProduct} from '../../../../../shared/components/ui/item-product/model/iitem-product';
import {Categories} from '../../../homePage/categories/model/categories';

export interface FilterObject {
  searchTerm: string;
  category: Categories[];
  products: IItemProduct[];
  price: {
    min: number;
    max: number;
  };
}
