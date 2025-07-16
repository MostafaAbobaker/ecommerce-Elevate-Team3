import {Observable} from 'rxjs';
import {SignInDataRequested} from '../interface/auth/data-requested/signin-data-requested';
import {AuthDataResponded} from '../interface/auth/data-responded/auth-data-responded';
import {SignupDataRequested} from '../interface/auth/data-requested/signup-data-requested';
import {ForgetPasswordDataRequested} from '../interface/forget-password/forget-password-data-requested';
import {ForgetPasswordDataResponses} from '../interface/forget-password/forget-password-data-responded';
import {VerifyDataRequested} from '../interface/verify-code/verify-data-requested';
import {VerifyDataResponse} from '../interface/verify-code/verify-data-responsed';
import {ResetDataRequested} from '../interface/reset-password/reset-data-requested';

export abstract class AuthApiAbstract {
  abstract SIGN_IN (data: SignInDataRequested): Observable<AuthDataResponded>;
  abstract SIGN_UP (data: SignupDataRequested): Observable<AuthDataResponded>;
  abstract FORGET_PASSWORD(data: ForgetPasswordDataRequested): Observable<ForgetPasswordDataResponses>;
  abstract VERIFY_CODE(data: VerifyDataRequested): Observable<VerifyDataResponse>; // OTP verification
  abstract RESET_PASSWORD(data: ResetDataRequested): Observable<AuthDataResponded>;
}
