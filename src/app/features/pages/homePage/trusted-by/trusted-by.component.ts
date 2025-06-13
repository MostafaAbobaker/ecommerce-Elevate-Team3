import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-trusted-by',
  imports: [
    TranslatePipe
  ],
  templateUrl: './trusted-by.component.html',
  styleUrl: './trusted-by.component.css'
})
export class TrustedByComponent {
  trustedImages: string[] = [
    'image36.svg',
    'image40.svg',
    'image41.svg',
    'image38.svg',
    'image39.svg',
    'image37.svg',
  ]
}
