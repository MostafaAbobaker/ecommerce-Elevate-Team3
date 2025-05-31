import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  galleryImages: string[] = [
    '1.png',
    '2.png',
    '3.jpg',
    '4.png',
    '5.png',
  ];

  constructor() { }
}
