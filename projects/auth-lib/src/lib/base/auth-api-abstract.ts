import {Observable} from 'rxjs';

export abstract class AuthApiAbstract {
  abstract SIGN_IN (data: any): Observable<any>;
  abstract SIGN_UP (data: any): Observable<any>;
  abstract FORGET_PASSWORD(data: any): Observable<any>;
  abstract VERIFY_CODE(data: any): Observable<any>; // OTP verification
  abstract RESET_PASSWORD(data: any): Observable<any>;
}
