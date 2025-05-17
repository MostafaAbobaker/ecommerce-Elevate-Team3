import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Api_End_Point} from '../../../../../../environments/Api_End_Point';

@Injectable({
  providedIn: 'root'
})
export class PopularItemsService {

  httpClient: HttpClient = inject (HttpClient);

  getPopularItems(categoryID: string): Observable <any> {
    return this.httpClient.get(`${Api_End_Point.CATEGORY_OF_PRODUCT}${categoryID}`);
  }
}
