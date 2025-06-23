import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../../../features/pages/homePage/popular-items/model/iresponse';

@Injectable({
  providedIn: 'root'
})
export class getProductsService {

  constructor(private _http:HttpClient) { }

  getPopularItems(categoryID: string): Observable <IResponse> {
    return this._http.get<IResponse>(`products?category=${categoryID}`);
  }
}
