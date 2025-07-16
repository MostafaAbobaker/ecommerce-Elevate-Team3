import {Injectable} from '@angular/core';
import {Auth_Api_Response} from '../../interface/auth/auth-api-response';
import {AuthDataResponded} from '../../interface/auth/data-responded/auth-data-responded';
import {AdapterAbstract} from '../adapter-abstract';
import {ErrorApiResponse} from '../../interface/error/error-api-response';
import {ErrorDataResponse} from '../../interface/error/error-data-response';
import {ForgetPasswordDataResponses} from '../../interface/forget-password/forget-password-data-responded';
import {VerifyDataResponse} from '../../interface/verify-code/verify-data-responsed';

@Injectable({
  providedIn: 'root'
})

export class AuthApiAdapter implements AdapterAbstract {

  // Authentication (Sign_In - Sign_Out) and Reset Password API response adapter
  AdaptResponse(data: Auth_Api_Response): AuthDataResponded {
    return {
      message: data.message,
      token: data.token,
    }
  }

  // Error API response adapter
  AdaptError(data: ErrorApiResponse): ErrorDataResponse {
    return {
      error: data.error.error,
      message: data.message,
      status: data.status,
    }
  }

  // Forget Password API response adapter
  AdaptForgetPasswordResponse(data: ForgetPasswordDataResponses): ForgetPasswordDataResponses{
    return {
      info: data.info,
      message: data.message
    }
  }

  // Verify Code API response adapter
  AdaptVerifyResponse(data: VerifyDataResponse): VerifyDataResponse {
    return {
      status: data.status
    }
  }

}
