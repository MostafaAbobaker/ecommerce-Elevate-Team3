import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private _http: HttpClient) { }

  getSpecificProducts(id: string): Observable<any> {
    return this._http.get(`products/${id}`);
  }
  
  getRelatedProducts(id: string): Observable<any> {
    return this._http.get(`related/category/${id}`);
  }

  addReviewsProduct(data:any): Observable<any> {
    return this._http.post(`reviews`, data , {
      headers:{token: localStorage.getItem('userToken')!}
    });
  }
  getReviewsProduct(id: string): Observable<any> {
    return this._http.get(`products/${id}/reviews`);
  }
}
