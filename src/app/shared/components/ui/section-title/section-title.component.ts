import {Component, Input} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-section-title',
  imports: [
    TranslatePipe
  ],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.css'
})
export class SectionTitleComponent {

  @Input() title: string = '';
}
