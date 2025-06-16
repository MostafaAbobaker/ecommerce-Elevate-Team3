import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  private readonly LANG_KEY = 'app-lang';
  private readonly RTL_LANGUAGES = ['ar', 'he', 'fa', 'ur']; // Languages that use RTL direction

  constructor(private translate: TranslateService) {
    const savedLang = typeof window !== 'undefined' && window.localStorage ? localStorage.getItem(this.LANG_KEY) : null;
    const defaultLang = savedLang || 'en';
    this.setLanguage(defaultLang);
  }

  setLanguage(lang: string): void {
    this.translate.use(lang);
    if (typeof window !== 'undefined') {
      // Save to localStorage
      if (window.localStorage) {
        localStorage.setItem(this.LANG_KEY, lang);
      }

      // Update HTML element attributes
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('lang', lang);
        if(lang == 'ar') {
          document.documentElement.setAttribute('dir', 'rtl');
        } else if (lang == 'en'){
                    document.documentElement.setAttribute('dir', 'ltr');

        }
      }
    }
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang || this.translate.defaultLang || 'en';
  }

  getAvailableLanguages(): string[] {
    return this.translate.getLangs();
  }

  isRtl(): boolean {
    return this.RTL_LANGUAGES.includes(this.getCurrentLanguage());
  }



  /* private readonly Lang_KEY = 'app-lang';
  private currentLang: string = 'en';



constructor() {
  if (typeof window !== 'undefined' && window.localStorage) {
    const savedLang = localStorage.getItem(this.Lang_KEY);
    if (savedLang) {
      this.setTheme(savedLang);
      return;
    }
  }
  this.setTheme(this.currentLang);
}

 setTheme(lang: string): void {
  this.currentLang = lang;
  if (typeof document !== 'undefined') {
    if(lang == 'en') {
      document.documentElement.setAttribute('lang', lang);
      document.documentElement.setAttribute('dir', 'ltr');
    } else if (lang == 'ar') {
      document.documentElement.setAttribute('lang', lang);
      document.documentElement.setAttribute('dir', 'rtl');

    }
  }
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem(this.Lang_KEY, lang);
  }
}

  toggleLang(): void {
    const newLang = this.currentLang === 'ar' ? 'en' : 'ar';
    this.setTheme(newLang);
  }

  getLang(): string {
    return this.currentLang;
  } */
}
