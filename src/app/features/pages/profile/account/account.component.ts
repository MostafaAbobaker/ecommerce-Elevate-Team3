import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CountryISO, NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { UploadPhotoService } from './service/upload-photo.service';
import { EditProfileService } from './service/edit-profile.service';
import { SelectModule } from 'primeng/select';
import { DeleteAccountService } from './service/delete-account.service';
import { Router } from '@angular/router';
interface gender {
    name: string;
    value: string;
}
@Component({
  selector: 'app-account',
  imports: [ReactiveFormsModule, NgxIntlTelInputModule,SelectModule,FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent implements OnInit {
  imageSrc: string | null = null;
  errorMessage: string | null = null;

  CountryISO = CountryISO;
  accountForm: FormGroup;
  imageFormData = new FormData(); // ✅ إنشاء صحيح

  gender: gender[] = [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' }

  ];



  selectedGenderCode: string = '';

  constructor(
    private fb: FormBuilder,
    private _uploadPhotoService: UploadPhotoService,
    private _editProfileService:EditProfileService,
    private _deleteAccountService:DeleteAccountService,
    private _router: Router
  ) {
    this.accountForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.editProfile();

  }
  editProfile() {
    this._editProfileService.editProfile().subscribe({
      next:(res)=> {
        console.log(res);

      const user = res?.user;
        if (user) {
          this.accountForm.patchValue({
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            email: user.email || '',
            phone: user.phone || '',
            gender: user.gender || ''
          });


        }

      }, error:(err)=> {
        console.log(err);
      }
    })
  }

  uploadPhoto() {
    console.log('upload photo function called', this.imageFormData);
    this._uploadPhotoService.uploadPhoto(this.imageFormData).subscribe({
      next: (response) => {
        console.log('Photo uploaded successfully', response);
      },
      error: (error) => {
        console.error('Error uploading photo', error);
      },
    });
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
    this.imageFormData.append(
      'photo',
      (event.target as HTMLInputElement).files?.[0] || ''
    );
    this.uploadPhoto();
  }

  deleteAccount(){
    this._deleteAccountService.deleteACcount().subscribe({
      next:(res)=>{
        console.log(res);
        this._router.navigate(['/signin']);
        localStorage.clear();

      } , error:(err)=>{
        console.log(err);
      }
    })
  }
}
