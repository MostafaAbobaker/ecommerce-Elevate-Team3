import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Toast} from 'primeng/toast';
import {AuthHeaderComponent} from '../../../layout/auth-layout/Component/auth-header/auth-header.component';
import {AuthBtnComponent} from '../../../layout/auth-layout/Component/auth-btn/auth-btn.component';
import {AuthFooterComponent} from '../../../layout/auth-layout/Component/auth-footer/auth-footer.component';
import {TranslatePipe} from '@ngx-translate/core';
import {MessageService} from 'primeng/api';
import {Router, RouterLink} from '@angular/router';
import {Subscription} from 'rxjs';
import {AuthLibService} from '../../../../../../projects/auth-lib/src/lib/auth-lib.service';
import {NgClass} from '@angular/common';
import {StoreEmailService} from '../../Service/storeEmail/store-email.service';
import {SecureAccessService} from '../../Service/secure-access/secure-access.service';
import {
  VerifyDataRequested
} from '../../../../../../projects/auth-lib/src/lib/interface/verify-code/verify-data-requested';

@Component({
  selector: 'app-otp',
  imports: [FormsModule, Toast, AuthHeaderComponent, AuthBtnComponent, AuthFooterComponent, TranslatePipe, RouterLink, ReactiveFormsModule, NgClass],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css',
  providers: [MessageService]
})
export class OtpComponent implements OnInit, OnDestroy {

  private readonly router: Router = inject(Router);
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  private readonly authLibService: AuthLibService = inject(AuthLibService);
  private readonly messageService: MessageService = inject(MessageService);
  private readonly storeEmailService: StoreEmailService = inject(StoreEmailService);
  private readonly secureAccessService: SecureAccessService = inject(SecureAccessService);

  title: string = "Verify OTP";
  otpFormGroup!: FormGroup;
  otpValue!: FormGroup;
  authSubscription!: Subscription;

  ngOnInit(): void {
    this.verifyOtpForm();
  }

  verifyOtpForm(): void {
    this.otpFormGroup = this.formBuilder.group({
      otp1: ['', [Validators.required, Validators.pattern('[0-9]')]],
      otp2: ['', [Validators.required, Validators.pattern('[0-9]')]],
      otp3: ['', [Validators.required, Validators.pattern('[0-9]')]],
      otp4: ['', [Validators.required, Validators.pattern('[0-9]')]],
      otp5: ['', [Validators.required, Validators.pattern('[0-9]')]],
      otp6: ['', [Validators.required, Validators.pattern('[0-9]')]]
    });
  };

  verifyOtp(): void{

    if(this.otpFormGroup.invalid){
      this.show("Error");
      this.otpFormGroup.markAllAsTouched();
      return;
    }

    const otpValue = Object.values(this.otpFormGroup.value).join('');

    const payload : VerifyDataRequested = {
      resetCode: otpValue
    };

    console.log("OTP Form Value: ", otpValue);

    this.authSubscription = this.authLibService.VERIFY_CODE(payload).subscribe({
      next: () => {
          this.show("Success");
          this.goTo_SecureAccess();
      },
      error: () => {
        this.show("Error");
      }
    })
  }

  show(statusForm: string): void {
    if(statusForm === "Success"){
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Account Is Created' });
    }else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Mismatch' });
    }
  }

  goTo_SecureAccess(): void {
    this.secureAccessService.writableSignal.set('resetPassword')
    this.router.navigate(['/secure-access']);
  }

  reSendOtp(): void {

    const payLoad = {
      email: this.storeEmailService.storeEmail()
    }

    if (payLoad.email){
      this.authLibService.FORGET_PASSWORD(payLoad).subscribe({
        next: () => {
          this.show("Success");
        },
        error: () => {
          this.show("Error");
        }
      })
    }
  }

  ngOnDestroy(): void {
    if(this.authSubscription){
      this.authSubscription.unsubscribe();
    }
  }
}
