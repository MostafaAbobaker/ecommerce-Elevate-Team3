import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NgClass} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import {AuthBtnComponent} from '../../../layout/auth-layout/Component/auth-btn/auth-btn.component';
import {AuthHeaderComponent} from '../../../layout/auth-layout/Component/auth-header/auth-header.component';
import {AuthFooterComponent} from '../../../layout/auth-layout/Component/auth-footer/auth-footer.component';
import {AuthLibService} from '../../../../../../projects/auth-lib/src/lib/auth-lib.service';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {Toast} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {
  AuthDataResponded
} from '../../../../../../projects/auth-lib/src/lib/interface/auth/data-responded/auth-data-responded';
import {ThemeService} from '../../../../shared/services/theme/theme.service';

@Component({
  selector: 'app-sign-up',
  imports: [
    AuthHeaderComponent,
    AuthFooterComponent,
    TranslatePipe,
    AuthBtnComponent,
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    Toast,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  providers: [MessageService]
})
export class SignUpComponent implements OnInit, OnDestroy {

  private readonly router: Router = inject(Router);
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  private readonly authLibService: AuthLibService = inject(AuthLibService);
  private readonly messageService: MessageService = inject(MessageService);

  title: string = "Create Account";
  signUpFormGroup!: FormGroup;
  authSubscription!: Subscription;

  isShowPassword: boolean = false;
  isShowRePassword: boolean = false;

  ngOnInit(): void {
    this.signUpForm();
  }

  signUpForm(): void {
    this.signUpFormGroup = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email,]),
      phone: new FormControl ('', [Validators.required]).value?.toString(),
      gender: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      rePassword: new FormControl ('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
    }, { validators: this.passwordIsMatch });
  };

  passwordIsMatch(control: AbstractControl ): {misMatch: boolean} | null{
    const password: string = control.get('password')?.value;
    const rePassword: string = control.get("rePassword")?.value;

    if(password === rePassword) {
      return null;
    } else {
      return {
        misMatch: true,
      };
    }
  }

  showPassword(): void{
    this.isShowPassword = !this.isShowPassword;
  }

  showRePassword(): void{
    this.isShowRePassword = !this.isShowRePassword;
  }

  signUp (): void {

    if(this.signUpFormGroup.invalid){
      this.show("Error");
      this.signUpFormGroup.markAllAsTouched();
      return;
    }

    this.authSubscription = this.authLibService.SIGN_UP(this.signUpFormGroup.value).subscribe({
      next: (data: AuthDataResponded): void => {
        this.show("Success");
      },
      error: (data: any): void => {
        this.show("Error");
      }
    })

    this.signUpFormGroup.reset();
    this.goToSignin();
  }

  show(statusForm: string): void {
    if(statusForm === "Success"){
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Account Is Created' });
    }else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Mismatch' });
    }
  }

  goToSignin (): void {
    this.router.navigate(['/signin']).then(r => r);
  }

  ngOnDestroy(): void {
    if(this.authSubscription){
      this.authSubscription.unsubscribe();
    }
  }
}
