import {Component, computed, inject, Signal} from '@angular/core';
import {SecureAccessService} from '../../Service/secureAccess-OTP-resetPass/secure-access.service';
import {OtpComponent} from '../otp/otp.component';
import {ResetPasswordComponent} from '../reset-password/reset-password.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-secure-access',
  imports: [
    OtpComponent,
    ResetPasswordComponent
  ],
  templateUrl: './secure-access.component.html',
  styleUrl: './secure-access.component.css'
})
export class SecureAccessComponent {

  private readonly SecureAccessService: SecureAccessService = inject(SecureAccessService);
  private readonly translateService: TranslateService = inject(TranslateService);

  secureAccessStep: Signal<string> = computed((): string => this.SecureAccessService.writableSignal());

}
