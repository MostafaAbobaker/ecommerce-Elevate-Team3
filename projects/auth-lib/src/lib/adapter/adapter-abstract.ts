import {AuthDataResponded} from '../interface/auth/data-responded/auth-data-responded';
import {Auth_Api_Response} from '../interface/auth/auth-api-response';
import {ErrorApiResponse} from '../interface/error/error-api-response';
import {ErrorDataResponse} from '../interface/error/error-data-response';
import {ForgetPasswordDataResponses} from '../interface/forget-password/forget-password-data-responded';
import {VerifyDataResponse} from '../interface/verify-code/verify-data-responsed';

export abstract class AdapterAbstract {
  // Authentication API response adapter
  abstract AdaptResponse(data: Auth_Api_Response): AuthDataResponded;
  abstract AdaptError(data: ErrorApiResponse): ErrorDataResponse;
  abstract AdaptForgetPasswordResponse(data: Auth_Api_Response): ForgetPasswordDataResponses;
  abstract AdaptVerifyResponse(data: Auth_Api_Response): VerifyDataResponse;
}
