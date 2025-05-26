import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Api_End_Point} from '../../../../../../environments/Api_End_Point';
import {PopularItems} from '../../model/popular-items';

@Injectable({
  providedIn: 'root'
})
export class PopularItemsService {

  httpClient: HttpClient = inject (HttpClient);

  getPopularItems(categoryID: string): Observable <PopularItems> {
    return this.httpClient.get<PopularItems>(`${Api_End_Point.CATEGORY_OF_PRODUCT}${categoryID}`);
  }
}
