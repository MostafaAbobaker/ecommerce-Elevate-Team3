import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../../../homePage/popular-items/model/iresponse';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }

getAllProducts(limit: number,page:number): Observable<IResponse> {
    return this._http.get<IResponse>(`products?limit=${limit}&page=${page}`);
  }
}
