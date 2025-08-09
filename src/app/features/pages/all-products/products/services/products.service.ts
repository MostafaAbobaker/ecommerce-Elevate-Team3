import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseProduct } from '../../../homePage/popular-items/model/IResponseProduct';
import { IProductDetails } from '../../product-details/models/product-details';
// import { IResponse } from '../../../homePage/popular-items/model/iresponse';
import { IResponseProductDetails } from './../../product-details/models/product-details';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getAllProducts(limit: number, page: number): Observable<IResponseProduct> {
    return this._http.get<IResponseProduct>(`products?limit=${limit}&page=${page}`);
  }

  
}
