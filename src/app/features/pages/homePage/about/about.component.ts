import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  aboutInfo: string[] = [
    'Streamlined Shipping Experience.',
    'Affordable Modern Design.',
    'Competitive Price & Easy To Shop.',
    'We Made Awesome Products.'
  ]


}
