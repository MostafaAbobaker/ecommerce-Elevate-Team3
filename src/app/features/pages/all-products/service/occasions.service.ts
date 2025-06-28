import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OccasionsService {

  constructor(private _http:HttpClient) { }
  getOccasions() :Observable<any> {
    return this._http.get('occasions?limit=50')
  }
}
