import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadPhotoService {

  constructor(private _http: HttpClient) { }

  uploadPhoto(data: FormData) {
    return this._http.put('auth/upload-photo', data);
  }
}
