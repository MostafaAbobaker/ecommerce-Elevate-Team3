import {inject, Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreEmailService {

  // This service is used to store the email address of the user
  storeEmail: WritableSignal <string> = signal <string>('');

}
