import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IResponseProduct} from '../../../../features/pages/homePage/popular-items/model/IResponseProduct';

@Injectable({
  providedIn: 'root'
})
export class getProductsService {

  constructor(private _http:HttpClient) { }

  getPopularItems(categoryID: string): Observable <IResponseProduct> {
    return this._http.get<IResponseProduct>(`products?category=${categoryID}`);
  }
}
