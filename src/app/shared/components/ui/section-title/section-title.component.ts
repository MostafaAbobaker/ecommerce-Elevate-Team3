import {Component, Input} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-section-title',
  imports: [
    TranslateModule
  ],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.css'
})
export class SectionTitleComponent {

  @Input() title: string = '';
}
