import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(private _http:HttpClient) { }

  changePassword(data:any){
    return this._http.patch('auth/change-password',data);
  }
}
