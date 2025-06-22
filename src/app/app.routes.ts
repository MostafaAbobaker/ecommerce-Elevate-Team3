import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './core/layout/home-layout/home-layout.component';
import { AllProductsComponent } from './features/pages/all-products/all-products.component';
import { HomePageComponent } from './features/pages/homePage/home-page/home-page.component';

export const routes: Routes = [
    {path:'', component:HomeLayoutComponent , children:[
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () =>
          import('./features/pages/homePage/home-page/home-page.component').then(m => m.HomePageComponent) },
      { path: 'all-Products',  loadChildren: () =>
          import('./features/pages/all-products/all-products.component').then(m => m.AllProductsComponent) },

    ]},

];
