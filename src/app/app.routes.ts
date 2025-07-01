import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './core/layout/home-layout/home-layout.component';
import { HomePageComponent } from './features/pages/homePage/home-page/home-page.component';
import { AllProductsComponent } from './features/pages/all-products/all-products.component';

export const routes: Routes = [
    {path:'', component:HomeLayoutComponent , children:[
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component:HomePageComponent},
      { path: 'all-Products', component:AllProductsComponent},
      /* { path: 'home', loadChildren: () =>
          import('./features/pages/homePage/home-page/home-page.component').then(m => m.HomePageComponent) },
      { path: 'all-Products',  loadChildren: () =>
          import('./features/pages/all-products/all-products.component').then(m => m.AllProductsComponent) }, */

    ]},

];
