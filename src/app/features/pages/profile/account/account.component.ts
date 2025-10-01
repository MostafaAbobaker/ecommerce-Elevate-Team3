import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryISO, NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { UploadPhotoService } from './service/upload-photo.service';


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
  imageFormData = new FormData(); // ✅ إنشاء صحيح



  constructor(private fb:FormBuilder,
    private _uploadPhotoService:UploadPhotoService
  ){

    this.accountForm = this.fb.group({
      firstName :['', [Validators.required]],
      lastName :['', [Validators.required]],
      email :['', [Validators.required, Validators.email]],
      phone :['', [Validators.required]],
      gender :['', [Validators.required]],
    })

  }


  uploadPhoto() {
    console.log('upload photo function called', this.imageFormData);
debugger
    this._uploadPhotoService.uploadPhoto(this.imageFormData).subscribe({
      next: (response) => {
        console.log('Photo uploaded successfully', response);
      },
      error: (error) => {
        console.error('Error uploading photo', error);
      }
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
    this.imageFormData.append('photo', (event.target as HTMLInputElement).files?.[0] || '');
    this.uploadPhoto();
  }
}
