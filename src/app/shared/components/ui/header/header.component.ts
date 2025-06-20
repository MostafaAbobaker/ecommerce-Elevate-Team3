import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  darkMode!: boolean

  language = localStorage.getItem('lang')!;
  constructor(private _themeService: ThemeService, private translate: TranslateService) {
    if (localStorage.getItem('lang') == null) {
      this.useLanguage('en')
    }
    this.useLanguage(this.language)
  }
  useLanguage(lang: string): void {
    //  this.translate.addLangs(['ar', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use(lang);
    localStorage.setItem('lang', lang)
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
}
