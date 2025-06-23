import {Component, inject, OnInit} from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import {TranslationService} from '../../../../core/Services/translation.service';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { LocalStorageService } from '../../../services/local-storage.service';

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

  language : string | null;

  constructor(private _themeService: ThemeService, private translate: TranslateService, private _localStorageService: LocalStorageService) {
    this.language = this._localStorageService.getItem('lang')!;
    if (this.language  == null) {
      this.useLanguage('en')
    }
    this.useLanguage(this.language)
  }
  useLanguage(lang: string): void {
    //  this.translate.addLangs(['ar', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use(lang);
    this._localStorageService.setItem('lang', lang);
    // localStorage.setItem('lang', lang)
  }

  ngOnInit(): void {
    if (this.getCurrentTheme() == 'light') {
      this.darkMode = false;
    } else {
      this.darkMode = true;
    }
  }
  getCurrentTheme(): string {
    return this._themeService.getTheme();
  }
  setTheme(name: string) {
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
