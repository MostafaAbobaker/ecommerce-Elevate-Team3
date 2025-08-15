import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecureAccessService {

  writableSignal: WritableSignal <string> = signal <string> ('');

}
