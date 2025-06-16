import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LocalizationService } from '../../../services/localization.service';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  darkMode!:boolean
  currentLang! :string
  constructor(private _themeService:ThemeService,private localizationService: LocalizationService){
    /* this.translate.addLangs(['ar', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en'); */
    this.currentLang = this.localizationService.getCurrentLanguage();

  }
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
  changeLang(lang: string) {
  this.localizationService.setLanguage(lang);
  this.currentLang = lang;
}
 getIsRtl(): boolean {
    return this.localizationService.isRtl();
  }
}
