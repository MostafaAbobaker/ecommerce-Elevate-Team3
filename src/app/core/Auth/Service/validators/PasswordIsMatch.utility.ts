import { AbstractControl } from '@angular/forms';

export function passwordMatchValidator(control: AbstractControl): {misMatch: boolean} | null {
  const password = control.get('password')?.value;
  const rePassword = control.get('rePassword')?.value;

  if (password === rePassword) {
    return null;
  }

  return { misMatch: true };
}
