import {Component, inject} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {TranslationService} from '../../../../core/Services/translation.service';

@Component({
  selector: 'app-header',
  imports: [
    TranslatePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private readonly translationService: TranslationService = inject(TranslationService);

  // Dark Mode Toggle
  darkMode:boolean = false;
  isOpen: boolean = false;

  dropDownLang(): void{
    this.isOpen = !this.isOpen;
  }

  changeLanguage(lang: string): void{
    this.translationService.changeLang(lang);
    this.isOpen = !this.isOpen;
    console.log(`Language changed to: ${lang}`);
  }
}
