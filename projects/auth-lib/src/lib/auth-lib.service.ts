import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthApiAbstract} from './base/auth-api-abstract';
import {AuthApiEndpoint} from './enum/auth-api-endPoints';
import {catchError, map, Observable, throwError} from 'rxjs';
import {AuthApiAdapter} from './adapter/auth/auth-api-adapter';
import {ErrorApiResponse} from './interface/error/error-api-response';
import {ErrorDataResponse} from './interface/error/error-data-response';
import {VerifyDataRequested} from './interface/verify-code/verify-data-requested';
import {VerifyDataResponse} from './interface/verify-code/verify-data-responsed';
import {ResetDataRequested} from './interface/reset-password/reset-data-requested';
import {AuthDataResponded} from './interface/auth/data-responded/auth-data-responded';
import {SignupDataRequested} from './interface/auth/data-requested/signup-data-requested';
import {SignInDataRequested} from './interface/auth/data-requested/signin-data-requested';
import {ForgetPasswordDataRequested} from './interface/forget-password/forget-password-data-requested';
import {ForgetPasswordDataResponses} from './interface/forget-password/forget-password-data-responded';
import {Auth_Api_Response} from './interface/auth/auth-api-response';

@Injectable({
  providedIn: 'root'
})
export class AuthLibService implements AuthApiAbstract {

  private readonly httpClient: HttpClient = inject (HttpClient);
  // private readonly _API_BASE_URL: string = inject (API_BASE_URL);
  private readonly authApiAdapter: AuthApiAdapter = inject (AuthApiAdapter);

  SIGN_IN(data: SignInDataRequested): Observable<AuthDataResponded> {
    // this.API_BASE_URL + AuthApiEndpoint.SIGNIN
    return this.httpClient.post(AuthApiEndpoint.SIGN_IN, data).pipe(
      map((response: any): AuthDataResponded => this.authApiAdapter.AdaptResponse(response)),
      catchError((error: ErrorApiResponse): Observable <never> => {
        const adaptedError: ErrorDataResponse = this.authApiAdapter.AdaptError(error);
        return throwError((): ErrorDataResponse => adaptedError);
      })
    );
  }

  SIGN_UP(data: SignupDataRequested): Observable<AuthDataResponded> {
    // this.API_BASE_URL + AuthApiEndpoint.SIGNIN
    return this.httpClient.post(AuthApiEndpoint.SIGN_UP, data).pipe(
      map((response: any): AuthDataResponded => this.authApiAdapter.AdaptResponse(response)),
      catchError((error: ErrorApiResponse): Observable <never> => {
        const adaptedError: ErrorDataResponse = this.authApiAdapter.AdaptError(error);
        return throwError((): ErrorDataResponse => adaptedError);
      })
    )
  }

  FORGET_PASSWORD(data: ForgetPasswordDataRequested): Observable<ForgetPasswordDataResponses> {
    return this.httpClient.post(AuthApiEndpoint.FORGET_PASSWORD, data).pipe(
      map((response: any): ForgetPasswordDataResponses => this.authApiAdapter.AdaptForgetPasswordResponse(response)),
      catchError((error: ErrorApiResponse): Observable<never> => {
        const adaptedError: ErrorDataResponse = this.authApiAdapter.AdaptError(error);
        return throwError((): ErrorDataResponse => adaptedError);
      })
    );
  }

  VERIFY_CODE(data: VerifyDataRequested): Observable <VerifyDataResponse> {
    return this.httpClient.post(AuthApiEndpoint.VERIFY_RESET_CODE, data).pipe(
      map((response: any): VerifyDataResponse => this.authApiAdapter.AdaptVerifyResponse(response)),
      catchError((error: any): Observable<never> =>{
        const adapterError: ErrorDataResponse = this.authApiAdapter.AdaptError(error);
        return throwError((): ErrorDataResponse => adapterError)
      })
    );
  }

  RESET_PASSWORD(data: ResetDataRequested): Observable<AuthDataResponded> {
    return this.httpClient.put(AuthApiEndpoint.RESET_PASSWORD, data).pipe(
      map((response: any): AuthDataResponded => this.authApiAdapter.AdaptResponse(response)),
      catchError((error: ErrorApiResponse ): Observable<never> =>{
        const adaptedError: ErrorDataResponse = this.authApiAdapter.AdaptError(error);
        return throwError((): ErrorDataResponse => adaptedError);
      })
    );
  }
}
