import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { IResponse } from '../model/iresponse';
import { Api_End_Point } from '../../../../../../environments/Api_End_Point';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  httpClient: HttpClient = inject(HttpClient);

  getAllCategories (): Observable <IResponse> {
    return this.httpClient.get<IResponse>(Api_End_Point.CATEGORIES);
  }
}
