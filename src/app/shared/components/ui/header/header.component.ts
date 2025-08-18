import {Component, inject, OnInit} from '@angular/core';
import { ThemeService } from '../../../services/theme/theme.service';
import {TranslationService} from '../../../../core/Services/translation.service';
import {TranslatePipe} from '@ngx-translate/core';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    TranslatePipe,
    TieredMenuModule

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  private readonly translationService: TranslationService = inject(TranslationService);

  // Dark Mode Toggle
  darkMode!:boolean;
  isOpen: boolean = false;
items: any[] | undefined;

  constructor(private _themeService:ThemeService,
    private router: Router
  ){}
  ngOnInit(): void {
    if(this.getCurrentTheme() == 'light' ) {
      this.darkMode = false;
    } else {
      this.darkMode = true;
    }

    this.items=[
    {
      label: 'Jonathan Adrian',
    },
    {
                separator: true
            },
    {
      label: 'My Profile',
      icon: 'fa-regular fa-user',

       routerLink: '/profile'
     },
    {
      label: 'My Addresses',
      icon: 'fa-solid fa-location-pin-lock',
    },
    {
      label: 'My Orders',
      icon: 'fa-solid fa-newspaper',
      routerLink: '/orders'
    },
    {
                separator: true
            },
    {
      label: 'Dashboard',
      icon: 'fa-solid fa-gear',
    },
    {
                separator: true
            },
    {
      label: 'Log out',
      icon: 'fa-solid fa-arrow-right-from-bracket',
    },
  ];
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
