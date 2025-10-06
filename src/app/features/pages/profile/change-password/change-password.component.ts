import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ChangePasswordService } from '../account/service/change-password.service';

@Component({
  selector: 'app-change-password',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  // private readonly _changePasswordService = ChangePasswordService;
  // private readonly ChangePasswordFB :FormBuilder =inject(FormBuilder);

  oldPassword:boolean = false
  newPassword:boolean = false
  confirmPassword:boolean = false;



  // constructor(private _changePassword:ChangePasswordService){}

  // changePassword() {
  //   this._changePassword.changePassword()
  // }
  passwordForm: FormGroup;

  constructor(private fb: FormBuilder , private _changePasswordService:ChangePasswordService) {
    this.passwordForm = this.fb.group({
                password: ['', Validators.required],
                newPassword: ['', [Validators.required, Validators.minLength(6)]],
                confirmPassword: ['', Validators.required],
              }, { validators: this.passwordsMatch });
  }

  passwordsMatch(form: FormGroup) {
    const newPassword = form.get('newPassword')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {debugger
    if (this.passwordForm.valid) {
      const { password, newPassword } = this.passwordForm.value;
      this._changePasswordService.changePassword({ password, newPassword }).subscribe({
        next:(res)=>{
          console.log(res);
        }, error:(err)=>{
          console.log(err);}
      })
    }
  }

}
