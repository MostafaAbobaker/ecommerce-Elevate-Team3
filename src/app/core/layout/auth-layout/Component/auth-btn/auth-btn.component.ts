import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-auth-btn',
  imports: [],
  templateUrl: './auth-btn.component.html',
  styleUrl: './auth-btn.component.css'
})
export class AuthBtnComponent {
  @Input() title!: string;
}
