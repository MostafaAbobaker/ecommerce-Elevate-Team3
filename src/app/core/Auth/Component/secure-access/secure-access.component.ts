import {Component, computed, inject, Signal} from '@angular/core';
import {SecureAccessService} from '../../Service/secure-access/secure-access.service';
import {OtpComponent} from '../otp/otp.component';
import {ResetPasswordComponent} from '../reset-password/reset-password.component';
import {TranslateService} from '@ngx-translate/core';
import {ForgetPasswordComponent} from '../forget-password/forget-password.component';

@Component({
  selector: 'app-secure-access',
  imports: [
    OtpComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent
  ],
  templateUrl: './secure-access.component.html',
  styleUrl: './secure-access.component.css'
})
export class SecureAccessComponent {

  private readonly SecureAccessService: SecureAccessService = inject(SecureAccessService);
  private readonly translateService: TranslateService = inject(TranslateService);

  secureAccessStep: Signal<string> = computed((): string => this.SecureAccessService.writableSignal());

}
