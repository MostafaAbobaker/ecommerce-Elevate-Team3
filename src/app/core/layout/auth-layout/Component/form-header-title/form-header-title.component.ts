import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-form-header-title',
  imports: [


  ],
  templateUrl: './form-header-title.component.html',
  styleUrl: './form-header-title.component.css'
})
export class FormHeaderTitleComponent {
  @Input() title: string = "";
}
