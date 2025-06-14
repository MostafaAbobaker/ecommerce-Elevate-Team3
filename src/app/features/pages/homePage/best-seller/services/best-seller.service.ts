import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BestSellerService {

  constructor(private _http:HttpClient) { }
  getBestSellers() :Observable<any>{
    return this._http.get('best-seller');
  }
}
