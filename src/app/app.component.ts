import {Component, inject, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthLibService} from '../../projects/auth-lib/src/lib/auth-lib.service';

@Component({
  selector: 'app-root',
  imports: [RouterModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ecommerce-Elevate-Team5';


  signInForm!: FormGroup;

  private readonly authLibService: AuthLibService = inject(AuthLibService);

  ngOnInit(): void {

    this.signInForm = new FormGroup({
      // resetCode: new FormControl('312985'),
      email: new FormControl('rasidi4466@pacfut.com'),
      newPassword: new FormControl('Rasidi1234')
    });

    this.authLibService.FORGET_PASSWORD(this.signInForm.value).subscribe({
      next: (response): void => {
        console.log('Sign In Response:', response);
      },
      error: (error): void => {
        console.error('Sign In Error:', error);
      }
    })

  }

}
