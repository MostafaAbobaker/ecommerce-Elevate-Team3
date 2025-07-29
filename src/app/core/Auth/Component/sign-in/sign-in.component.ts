import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {AuthBtnComponent} from '../../../layout/auth-layout/Component/auth-btn/auth-btn.component';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TranslatePipe} from '@ngx-translate/core';
import {ValidationMessagesComponent} from '../validation-messages/validation-messages.component';
import {Subscription} from 'rxjs';
import {AuthLibService} from '../../../../../../projects/auth-lib/src/lib/auth-lib.service';
import {MessageService} from 'primeng/api';
import {Router, RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';
import {Toast} from 'primeng/toast';
import {AuthHeaderComponent} from '../../../layout/auth-layout/Component/auth-header/auth-header.component';
import {AuthFooterComponent} from '../../../layout/auth-layout/Component/auth-footer/auth-footer.component';
import {
  AuthDataResponded
} from '../../../../../../projects/auth-lib/src/lib/interface/auth/data-responded/auth-data-responded';

@Component({
  selector: 'app-sign-in',
  imports: [
    AuthBtnComponent,
    ReactiveFormsModule,
    TranslatePipe,
    ValidationMessagesComponent,
    NgClass,
    Toast,
    AuthHeaderComponent,
    AuthFooterComponent,
    RouterLink
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  providers: [MessageService]
})
export class SignInComponent implements OnInit , OnDestroy {

  private readonly router: Router = inject(Router);
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  private readonly authLibService: AuthLibService = inject(AuthLibService);
  private readonly messageService: MessageService = inject(MessageService);

  title: string = "Login";
  signInFormGroup!: FormGroup;
  authSubscription!: Subscription;
  isShowPassword: boolean = false;

  ngOnInit(): void {
    this.signInForm();
  }

  signInForm(): void {
    this.signInFormGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])
    });
  };

  showPassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }

  signIn(): void {
    console.log("SignIn");

    if(this.signInFormGroup.invalid){
      this.show("Error");
      this.signInFormGroup.markAllAsTouched();
      return;
    }

    this.authSubscription = this.authLibService.SIGN_IN(this.signInFormGroup.value).subscribe({
      next: (data: AuthDataResponded) => {
        this.show("Success");
        localStorage.setItem('token', data.token);
        this.goToHome(); //.file => Guard
      },
      error: error => {
        this.show(error.error);
      }
    });

    this.signInFormGroup.reset();
  }

  show(statusForm: string): void {
    if(statusForm === "Success"){
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Account Is Created' });
    }else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Mismatch' });
    }
  }

  goToHome (): void {
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    if(this.authSubscription){
      this.authSubscription.unsubscribe();
    }
  }

}
