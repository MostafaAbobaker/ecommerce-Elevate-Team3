import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueOfTapService {

  valueOfTap: WritableSignal <string> = signal <string> ('flowers');
  categoryID: WritableSignal <string> = signal <string > ('673c46fd1159920171827c85');
}
