import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddress, IResponseAddress } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private _http = inject(HttpClient);

  allAddresses(): Observable<IResponseAddress> {
    return this._http.get<IResponseAddress>(`addresses`,
      { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjdmNjQ3YzVhOTgzMmQ4MzU5ZGRhNzhhIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NTQ2NjM1OTN9.A9WhB_UVXzBjZUaqShUUN95LvN-5gKFrtzq4HER2xkQ` } },
    )
  }

  deleteUserAddress(id: string): Observable<IResponseAddress> {
    return this._http.delete<IResponseAddress>(`addresses/${id}`,
      { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjdmNjQ3YzVhOTgzMmQ4MzU5ZGRhNzhhIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NTQ2NjM1OTN9.A9WhB_UVXzBjZUaqShUUN95LvN-5gKFrtzq4HER2xkQ` } },
    )
  }

  addAddress(data: IAddress): Observable<IAddress> {
    return this._http.patch<IAddress>(`addresses`, data,
      { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjdmNjQ3YzVhOTgzMmQ4MzU5ZGRhNzhhIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NTQ2NjM1OTN9.A9WhB_UVXzBjZUaqShUUN95LvN-5gKFrtzq4HER2xkQ` } },
    );
  }

  updateAddress(id: string, data: IAddress): Observable<IAddress> {
    return this._http.patch<IAddress>(`addresses/${id}`, data,
      { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjdmNjQ3YzVhOTgzMmQ4MzU5ZGRhNzhhIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NTQ2NjM1OTN9.A9WhB_UVXzBjZUaqShUUN95LvN-5gKFrtzq4HER2xkQ` } },
    );
  }


}
