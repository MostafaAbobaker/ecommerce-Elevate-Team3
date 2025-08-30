import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryISO, NgxIntlTelInputModule } from 'ngx-intl-tel-input';


@Component({
  selector: 'app-account',
  imports: [ ReactiveFormsModule, NgxIntlTelInputModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  imageSrc: string | null = null;
  errorMessage: string | null = null;

  CountryISO = CountryISO;
  accountForm : FormGroup ;
  constructor(private fb:FormBuilder){

    this.accountForm = this.fb.group({
      firstName :['', [Validators.required]],
      lastName :['', [Validators.required]],
      email :['', [Validators.required, Validators.email]],
      phone :['', [Validators.required]],
      gender :['', [Validators.required]],
    })
  }


submitForm() {
    if (this.accountForm.valid) {
      console.log(this.accountForm.value);
    } else {
      console.warn('Form is invalid');
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];

      // التحقق من النوع
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        this.errorMessage = 'The file must be in the format JPG أو PNG أو GIF.';
        this.imageSrc = null;
        return;
      }

      // التحقق من الحجم (5MB = 5 * 1024 * 1024 bytes)
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        this.errorMessage = 'The image must be less than 5 MB.';
        this.imageSrc = null;
        return;
      }

      // لو كل شيء تمام، نعرض الصورة
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        this.errorMessage = null;
      };
      reader.readAsDataURL(file);
    }
  }
}
