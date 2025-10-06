import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {



  constructor(private _http:HttpClient) { }

  editProfile() :Observable<any>{
    let last_Name = typeof window !== 'undefined'? localStorage.getItem('Rose_LastName') : '';

    return this._http.put('auth/editProfile',
      {lastName:last_Name}
    );

  }
}
