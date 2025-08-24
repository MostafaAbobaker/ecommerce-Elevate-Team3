import {Component, computed, effect, inject, OnInit, Signal} from '@angular/core';
import { ThemeService } from '../../../services/theme/theme.service';
import {TranslationService} from '../../../../core/Services/translation.service';
import {TranslatePipe} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';
import {CartService} from '../../../../features/pages/cart/service/cart.service';

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
  private readonly cartService: CartService = inject(CartService);
  numberOfProductCart: Signal<number> = computed((): number => this.cartService.numberOfProductCart());

  // Dark Mode Toggle
  darkMode!:boolean;
  isOpen: boolean = false;

  constructor(private _themeService:ThemeService){}

  ngOnInit(): void {

    this.goToCart();

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

  goToCart(): void {
    this.cartService.getLoggedUserCart();
  }
}
