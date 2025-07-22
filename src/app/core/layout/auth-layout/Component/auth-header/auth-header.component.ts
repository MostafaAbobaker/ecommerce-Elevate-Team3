import {Component, inject} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {TranslationService} from '../../../../Services/translation.service';
import {FormHeaderTitleComponent} from '../form-header-title/form-header-title.component';

@Component({
  selector: 'app-auth-header',
  imports: [
    FormHeaderTitleComponent,
    TranslatePipe

  ],
  templateUrl: './auth-header.component.html',
  styleUrl: './auth-header.component.css'
})
export class AuthHeaderComponent {

  private readonly translationService: TranslationService = inject(TranslationService);
  title: string = "";

}
