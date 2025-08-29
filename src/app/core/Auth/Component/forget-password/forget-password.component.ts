import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {AuthBtnComponent} from '../../../layout/auth-layout/Component/auth-btn/auth-btn.component';
import {AuthFooterComponent} from '../../../layout/auth-layout/Component/auth-footer/auth-footer.component';
import {AuthHeaderComponent} from '../../../layout/auth-layout/Component/auth-header/auth-header.component';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {Toast} from 'primeng/toast';
import {TranslatePipe} from '@ngx-translate/core';
import {ValidationMessagesComponent} from '../validation-messages/validation-messages.component';
import {MessageService} from 'primeng/api';
import {AuthLibService} from 'Auth-Lib';
import {Subscription} from 'rxjs';
import {NgClass} from '@angular/common';
import { ForgetPasswordDataResponses } from '../../../../../../dist/auth-lib/lib/interface/forget-password/forget-password-data-responded';
import {StoreEmailService} from '../../Service/storeEmail/store-email.service';
import {SecureAccessService} from '../../Service/secure-access/secure-access.service';

@Component({
  selector: 'app-forget-password',
  imports: [
    AuthBtnComponent,
    AuthFooterComponent,
    AuthHeaderComponent,
    ReactiveFormsModule,
    RouterLink,
    Toast,
    TranslatePipe,
    ValidationMessagesComponent,
    NgClass
  ],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css',
  providers: [MessageService]
})
export class ForgetPasswordComponent implements OnInit, OnDestroy {

  private readonly route: Router = inject(Router);
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  private readonly authLibService: AuthLibService = inject(AuthLibService);
  private readonly messageService: MessageService = inject(MessageService);
  private readonly storeEmailService: StoreEmailService = inject(StoreEmailService);
  private readonly secureAccessService: SecureAccessService = inject(SecureAccessService);

  title: string = "Continue";
  forgetPasswordFormGroup!: FormGroup;
  authSubscription!: Subscription;

  ngOnInit(): void {
    this.forgetPasswordForm();
  }

  forgetPasswordForm(): void {
    this.forgetPasswordFormGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email,]),
    });
  };

  forgetPassword(): void{

    if(this.forgetPasswordFormGroup.invalid){
      this.show("Error");
      this.forgetPasswordFormGroup.markAllAsTouched();
      return;
    }

    this.authSubscription = this.authLibService.FORGET_PASSWORD(this.forgetPasswordFormGroup.value).subscribe({
      next: (data: ForgetPasswordDataResponses) => {
        this.show(data.info);
        this.storeEmail(); // Store email for later use
        this.goTo_SecureAccess(); //.file => Guard
      },
      error: error => {
        this.show(error.error);
      }
    });

    // this.forgetPasswordFormGroup.reset();
  }

  show(statusForm: string): void {
    if(statusForm === "Success"){
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Account Is Created' });
    }else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Mismatch' });
    }
  }

  storeEmail(): void{
    const email: string = this.forgetPasswordFormGroup.get('email')?.value;
    if (email){
      this.storeEmailService.storeEmail.set(email);
    }
  }

  goTo_SecureAccess (): void {
    this.secureAccessService.writableSignal.set("otp");
    this.route.navigate(['secure-access']);
  }

  ngOnDestroy(): void {
    if(this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
