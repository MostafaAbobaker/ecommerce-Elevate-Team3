import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  imageSrc: string | null = null;
  errorMessage: string | null = null;

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
