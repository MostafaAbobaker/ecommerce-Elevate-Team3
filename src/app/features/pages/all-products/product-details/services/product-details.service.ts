import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseProductDetails, IResponseRelatedProduct } from '../models/product-details';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private _http: HttpClient) { }

  getSpecificProducts(id: string): Observable<IResponseProductDetails> {
    return this._http.get<IResponseProductDetails>(`products/${id}`);
  }

  getRelatedProducts(id: string): Observable<IResponseRelatedProduct> {
    return this._http.get<IResponseRelatedProduct>(`related/category/${id}`);
  }

  addReviewsProduct(data: any): Observable<any> {
    return this._http.post(`reviews`, data, {
      headers: { token: localStorage.getItem('userToken')! }
    });
  }
  getReviewsProduct(id: string): Observable<any> {
    return this._http.get(`products/${id}/reviews`, {
      headers:{token:localStorage.getItem('userToken')!}
    });
  }
}
