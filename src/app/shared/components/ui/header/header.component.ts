import {Component, inject, OnInit} from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import {TranslationService} from '../../../../core/Services/translation.service';
import {TranslatePipe} from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    TranslatePipe,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  private readonly translationService: TranslationService = inject(TranslationService);

  // Dark Mode Toggle
  darkMode!:boolean;
  isOpen: boolean = false;

  constructor(private _themeService:ThemeService){}
  ngOnInit(): void {
    if(this.getCurrentTheme() == 'light' ) {
      this.darkMode = false;
    } else {
      this.darkMode = true;
    }
  }
  getCurrentTheme(): string {
    return this._themeService.getTheme();
  }
  setTheme(name:string) {
    this._themeService.setTheme(name);
    this.darkMode = !this.darkMode;
  }

  dropDownLang(): void{
    this.isOpen = !this.isOpen;
  }

  changeLanguage(lang: string): void{
    this.translationService.changeLang(lang);
    this.isOpen = !this.isOpen;
    console.log(`Language changed to: ${lang}`);
  }
}
