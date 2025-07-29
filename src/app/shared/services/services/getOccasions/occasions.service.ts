import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IResponse} from '../../../interfaces/IOccasions/iresponse';


@Injectable({
  providedIn: 'root'
})
export class OccasionsService {

  _http: HttpClient = inject(HttpClient);

  getAllOccasions(num?:number | 10): Observable<IResponse> {
    return this._http.get<IResponse>(`occasions?limit=${num}`); // Replace with actual API endpoint
  }
}
