import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormsModule } from "@angular/forms";
import { ChangePasswordService } from '../account/service/change-password.service';

@Component({
  selector: 'app-change-password',
  imports: [FormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  private readonly _changePasswordService = ChangePasswordService;
  private readonly ChangePasswordFB :FormBuilder =inject(FormBuilder);

  oldPassword:boolean = false
  newPassword:boolean = false
  confirmPassword:boolean = false;

  // changeForm :FormData = new FormData({
  //   password: new FormControl('',[{'', Validators.required}]),
  // });

  // constructor(private _changePassword:ChangePasswordService){}

  // changePassword() {
  //   this._changePassword.changePassword()
  // }
}
