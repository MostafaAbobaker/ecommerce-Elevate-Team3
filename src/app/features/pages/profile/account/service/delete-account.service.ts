import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteAccountService {

  constructor(private _http:HttpClient) { }

  deleteACcount():Observable<any>{
    return this._http.delete('auth/deleteMe');
  }
}
