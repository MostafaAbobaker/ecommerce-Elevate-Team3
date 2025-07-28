import {Component, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-validation-messages',
  imports: [],
  templateUrl: './validation-messages.component.html',
  styleUrl: './validation-messages.component.css'
})
export class ValidationMessagesComponent {

  @Input() controls!: AbstractControl;

  minLength(): string | null{
    return this.controls?.getError('minlength')?.requiredLength ?? null;
  }

  maxLength(): string | null {
    return this.controls.getError('maxlength').requiredLength ?? null;
  }
}
