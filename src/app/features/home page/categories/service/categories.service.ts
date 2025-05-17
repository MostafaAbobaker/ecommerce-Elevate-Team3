import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Api_End_Point} from '../../../../../environments/Api_End_Point';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  httpClient: HttpClient = inject(HttpClient);

  getAllCategories (): Observable <any> {
    return this.httpClient.get(Api_End_Point.CATEGORIES);
  }
}
