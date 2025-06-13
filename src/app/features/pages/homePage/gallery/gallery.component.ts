import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../../../shared/components/ui/section-title/section-title.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-gallery',
  imports: [SectionTitleComponent, TranslatePipe],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  title="Let's Check Our Photo Gallery"
  galleryImages: string[] = [
    '1.png',
    '2.png',
    '3.jpg',
    '4.png',
    '5.png',
  ];

  constructor() { }
}
