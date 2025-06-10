import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestPopularIremService {

  constructor(private _http:HttpClient) { }

  getCategories():Observable<any> {
    return this._http.get('categories')
  }
  getPopularItems(categoryID: string): Observable <any> {
    return this._http.get(`products?category=${categoryID}`);
  }
}
