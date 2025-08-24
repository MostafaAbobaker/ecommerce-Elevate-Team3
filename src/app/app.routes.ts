import { Routes } from '@angular/router';

export const routes: Routes = [
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
  },
  { path:'', loadComponent: () => import('./core/layout/home-layout/home-layout.component').then(c => c.HomeLayoutComponent)
    , children:[
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', loadComponent: ()=> import('./features/pages/homePage/home-page/home-page.component').then (c => c.HomePageComponent), title: 'Home' },
        { path: 'all-Products', loadComponent: ()=> import('./features/pages/all-products/all-products.component').then(c => c.AllProductsComponent), title: 'All Products' }
      ]
  },
];

