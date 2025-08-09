import { Routes } from '@angular/router';

export const routes: Routes = [
  { path:'', loadComponent: () => import('./core/layout/home-layout/home-layout.component').then(c => c.HomeLayoutComponent)
    , children:[
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', loadComponent: ()=> import('./features/pages/homePage/home-page/home-page.component').then (c => c.HomePageComponent) },
        { path: 'all-Products', loadComponent: ()=> import('./features/pages/all-products/all-products.component').then(c => c.AllProductsComponent) }
      ]
  },
  { path: '', loadComponent: () => import('./core/layout/auth-layout/auth-layout.component').then(c => c.AuthLayoutComponent),
    children:[
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: 'signin', loadComponent: () => import('./core/Auth/Component/sign-in/sign-in.component'). then(c => c.SignInComponent)},
      { path: 'signup', loadComponent: () => import('./core/Auth/Component/sign-up/sign-up.component'). then(c => c.SignUpComponent)}
    ]
  },

];
