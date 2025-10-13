import { TieredMenuModule } from 'primeng/tieredmenu';
import { Router, RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import {Component, computed, effect, inject, OnInit, Signal, PLATFORM_ID} from '@angular/core';
import { ThemeService } from '../../../services/theme/theme.service';
import {TranslationService} from '../../../../core/Services/translation.service';
import {TranslatePipe} from '@ngx-translate/core';
import {CartService} from '../../../../features/pages/cart/service/cart.service';

@Component({
  selector: 'app-header',
  imports: [
    TranslatePipe,
    TieredMenuModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  private readonly translationService: TranslationService = inject(TranslationService);
  private platformId = inject(PLATFORM_ID);

  isLogin: boolean = false;


  firstName: string | null = ''
  lastName: string | null =''
  email: string | null = ''
  phone: string | null = ''
  image: string | null = ''
  private readonly cartService: CartService = inject(CartService);
  numberOfProductCart: Signal<number> = computed((): number => this.cartService.numberOfProductCart());

  // Dark Mode Toggle
  darkMode!:boolean;
  isOpen: boolean = false;
  items: any[] | undefined;

  constructor(private _themeService:ThemeService,
    private router: Router
  ){}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {

       let token = localStorage.getItem('Rose_token');
       if(token){
         this.isLogin = true;
       }
        this.firstName = localStorage.getItem('Rose_FirstName');
        this.lastName = localStorage.getItem('Rose_LastName');
        this.email = localStorage.getItem('Rose_Email');
        this.phone = localStorage.getItem('Rose_Phone');
        this.image = localStorage.getItem('Rose_image');
    }



    this.goToCart();

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
      command:() => {
        this.signOut();
      }
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

  signOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
    this.isLogin = false;
  }
  goToCart(): void {
    this.cartService.getLoggedUserCart();
  }
}
