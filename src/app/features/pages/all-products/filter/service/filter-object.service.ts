import { Injectable } from '@angular/core';
import {FilterObject} from '../interface/filterObject';

@Injectable({
  providedIn: 'root'
})
export class FilterObjectService{

  constructor() { }
  filterObject: FilterObject = {
    searchTerm: '',
    category: [],
    occasions: [],
    products: [],
    ratings: [],
    price: {
      min: 0,
      max: 1000
    }
  }
}
