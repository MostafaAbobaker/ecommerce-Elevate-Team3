import { Injectable } from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PasswordIsMatchService {

  constructor() { }

  passwordIsMatch(control: AbstractControl ): {misMatch: boolean} | null{
    const password: string = control.get('password')?.value;
    const rePassword: string = control.get("rePassword")?.value;

    if(password === rePassword) {
      return null;
    } else {
      return {
        misMatch: true,
      };
    }
  }
}
