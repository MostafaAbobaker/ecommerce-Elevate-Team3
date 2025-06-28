import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './core/layout/home-layout/home-layout.component';

export const routes: Routes = [
    {path:'', component:HomeLayoutComponent , children:[
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      /* { path: 'home', component:HomePageComponent},
      { path: 'all-Products', component:AllProductsComponent}, */
      { path: 'home', loadComponent: () => import('./features/pages/homePage/home-page/home-page.component').then(m=> m.HomePageComponent) },
      {path: 'all-Products',loadComponent:()=> import('./features/pages/all-products/all-products.component').then(m=>m.AllProductsComponent)}

    ]},

];
