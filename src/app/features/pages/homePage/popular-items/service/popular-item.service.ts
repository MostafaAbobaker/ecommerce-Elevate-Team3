import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../model/iresponse';

@Injectable({
  providedIn: 'root'
})
export class popularItemService {

  constructor(private _http:HttpClient) { }

  getPopularItems(categoryID: string): Observable <IResponse> {
    return this._http.get<IResponse>(`products?category=${categoryID}`);
  }
}
