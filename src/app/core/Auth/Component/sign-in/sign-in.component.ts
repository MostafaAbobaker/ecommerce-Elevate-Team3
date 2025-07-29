import { Component } from '@angular/core';
import {AuthBtnComponent} from '../../../layout/auth-layout/Component/auth-btn/auth-btn.component';

@Component({
  selector: 'app-sign-in',
  imports: [
    AuthBtnComponent
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  title: string = "Login"
}
