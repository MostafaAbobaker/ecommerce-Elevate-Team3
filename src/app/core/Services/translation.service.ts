import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {isPlatformBrowser} from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  // Default Language
  defaultLang: string = 'ar';

  constructor(
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object) {

    if (isPlatformBrowser(this.platformId)) {

      // Get Language from Local Storage
      const savedLang: string | null = localStorage.getItem('lng');

      // Check If Language is not set, use the default language
      if (savedLang) {
        this.defaultLang = savedLang;
      }
    }

    // Set the default language
    this.translateService.setDefaultLang(this.defaultLang);

    // Use the default language
    this.translateService.use(this.defaultLang);

    // Change the direction based on the default language
    this.changeDirection(this.defaultLang);
  }

  /**
   * Change the language of the application
   * @param lang - The language code to switch to
   */
  changeLang(lang: string): void {

    // Use language
    this.translateService.use(lang);

    // Store the selected language in local storage
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lng', lang);
    }

    // Change the direction based on the language
    this.changeDirection(lang);
  }

  // Change the direction of the application based on the language
  changeDirection(lang: string): void {
    if(lang == 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      // document.documentElement.dir = 'ltr';
      // document.documentElement.lang = 'ltr';

    }else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  }
}
