import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  IResponseProduct } from '../../../features/pages/homePage/popular-items/model/IResponseProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }

getAllProducts(limit: number,page:number): Observable<IResponseProduct> {
    return this._http.get<IResponseProduct>(`products?limit=${limit}&page=${page}`);
  }
}
