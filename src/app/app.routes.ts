import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './core/layout/home-layout/home-layout.component';
import {loggedGuard} from './core/Guard/logged.guard';

export const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: ()=> import('./features/pages/homePage/home-page/home-page.component').then (c => c.HomePageComponent) },
      { path: 'all-Products', loadComponent: ()=> import('./features/pages/all-products/all-products.component').then(c => c.AllProductsComponent) },
      { path: 'product-details/:id', loadComponent: ()=> import('./features/pages/all-products/product-details/product-details.component').then(c => c.ProductDetailsComponent) },
      { path: 'cart', loadComponent: () => import('./features/pages/cart/cart.component').then(c => c.CartComponent), title: 'Cart', canActivate: [loggedGuard] },
      /* { path: 'home', loadChildren: () =>
          import('./features/pages/homePage/home-page/home-page.component').then(m => m.HomePageComponent) },
      { path: 'all-Products',  loadChildren: () =>
          import('./features/pages/all-products/all-products.component').then(m => m.AllProductsComponent) }, */
      { path: 'address', loadComponent: () => import('./features/pages/addresses/components/addresses/addresses.component').then(c => c.AddressesComponent) },
    ]
  },
  { path: '', loadComponent: () => import('./core/layout/auth-layout/auth-layout.component').then(c => c.AuthLayoutComponent),
    children:[
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: 'signin', loadComponent: () => import('./core/Auth/Component/sign-in/sign-in.component'). then(c => c.SignInComponent), title: 'Sign In'},
      { path: 'signup', loadComponent: () => import('./core/Auth/Component/sign-up/sign-up.component'). then(c => c.SignUpComponent), title: 'Sign Up'},
      // { path: 'forget-password', loadComponent: () => import('./core/Auth/Component/forget-password/forget-password.component').then(c => c.ForgetPasswordComponent), title: 'Forget Password' },
      { path: 'secure-access',  loadComponent: () => import('./core/Auth/Component/secure-access/secure-access.component').then(c => c.SecureAccessComponent), title: 'Secure Access' }
      // { path: 'otp', loadComponent: () => import('./core/Auth/Component/otp/otp.component').then(c => c.OtpComponent), title: 'OTP' },
      // { path: 'reset-password', loadComponent: () => import('./core/Auth/Component/reset-password/reset-password.component').then(c => c.ResetPasswordComponent), title: 'Reset Password' },
    ]
  }
]

