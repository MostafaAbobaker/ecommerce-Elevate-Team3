import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './core/layout/home-layout/home-layout.component';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';
import { loggedGuard } from './core/Guard/logged.guard';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./features/pages/homePage/home-page/home-page.component').then(c => c.HomePageComponent),
      },
      {
        path: 'all-Products',
        loadComponent: () =>
          import('./features/pages/all-products/all-products.component').then(c => c.AllProductsComponent),
      },
      {
        path: 'product-details/:id',
        loadComponent: () =>
          import('./features/pages/all-products/product-details/product-details.component').then(c => c.ProductDetailsComponent),
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./features/pages/orders/orders.component').then(c => c.OrdersComponent),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./features/pages/profile/profile.component').then(c => c.ProfileComponent),
        children: [
          { path: '', redirectTo: 'account', pathMatch: 'full' },
          {
            path: 'account',
            loadComponent: () =>
              import('./features/pages/profile/account/account.component').then(c => c.AccountComponent),
          },
          {
            path: 'changePassword',
            loadComponent: () =>
              import('./features/pages/profile/change-password/change-password.component').then(c => c.ChangePasswordComponent),
          },
        ],
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./features/pages/cart/cart.component').then(c => c.CartComponent),
        title: 'Cart',
        canActivate: [loggedGuard],
      },
      {
        path: 'address',
        loadComponent: () =>
          import('./features/pages/addresses/components/addresses/addresses.component').then(c => c.AddressesComponent),
      },
    ],
  },

  {
    path: 'auth',  component: AuthLayoutComponent,    children: [
      {
        path: 'signin',
        loadComponent: () =>
          import('./core/Auth/Component/sign-in/sign-in.component').then(c => c.SignInComponent),
        title: 'Sign In',
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./core/Auth/Component/sign-up/sign-up.component').then(c => c.SignUpComponent),
        title: 'Sign Up',
      },
      {
        path: 'secure-access',
        loadComponent: () =>
          import('./core/Auth/Component/secure-access/secure-access.component').then(c => c.SecureAccessComponent),
        title: 'Secure Access',
      },
    ],
  },
];
