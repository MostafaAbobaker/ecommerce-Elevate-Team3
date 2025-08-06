import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {AuthBtnComponent} from "../../../layout/auth-layout/Component/auth-btn/auth-btn.component";
import {AuthFooterComponent} from "../../../layout/auth-layout/Component/auth-footer/auth-footer.component";
import {AuthHeaderComponent} from "../../../layout/auth-layout/Component/auth-header/auth-header.component";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {Toast} from "primeng/toast";
import {TranslatePipe} from "@ngx-translate/core";
import {ValidationMessagesComponent} from "../validation-messages/validation-messages.component";
import {AuthLibService} from 'Auth-Lib';
import {MessageService} from 'primeng/api';
import {Subscription} from 'rxjs';
import {NgClass} from '@angular/common';
import {passwordMatchValidator} from '../../Service/validators/PasswordIsMatch.utility';

@Component({
  selector: 'app-reset-password',
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
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
  providers: [MessageService]
})
export class ResetPasswordComponent implements OnInit, OnDestroy{

  private readonly router: Router = inject(Router);
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  private readonly authLibService: AuthLibService = inject(AuthLibService);
  private readonly messageService: MessageService = inject(MessageService);

  title: string = "Reset Password";
  isShowPassword: boolean = false;
  isShowRePassword: boolean = false;
  resetPasswordFormGroup!: FormGroup;
  authSubscription!: Subscription;

  ngOnInit(): void {
    this.resetPasswordForm();
  }

  resetPasswordForm (): void {
    this.resetPasswordFormGroup = this.formBuilder.group({
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      rePassword: new FormControl ('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
    },{ validators: passwordMatchValidator });
  };

  showPassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }

  showRePassword(): void {
    this.isShowRePassword = !this.isShowRePassword;
  }

  resetPassword (): void{
    this.authSubscription = this.authLibService.RESET_PASSWORD(this.resetPasswordFormGroup.value).subscribe({
      next: success => {
        console.log(success);
        this.show("Success");
        this.goTo_SignIn();
      },
      error: error => {
        console.log("Error occurred during password reset:", error);
        this.show("Error");
      },
    })
  }

  show(statusForm: string): void {
    if(statusForm === "Success"){
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Account Is Created' });
    }else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Mismatch' });
    }
  }

  goTo_SignIn (): void {
    this.router.navigate(['/signin']);
  }

  ngOnDestroy(): void {
    if(this.authSubscription){
      this.authSubscription.unsubscribe();
    }
  }
}
