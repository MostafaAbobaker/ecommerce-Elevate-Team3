import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/ui/navbar/navbar.component';
import { FooterComponent } from "../../../shared/components/ui/footer/footer.component";
import { CategoriesComponent } from '../../../features/pages/homePage/categories/categories.component';
import { PopularItemsComponent } from '../../../features/pages/homePage/popular-items/popular-items.component';
import { TrustedByComponent } from '../../../features/pages/homePage/trusted-by/trusted-by.component';
import { GalleryComponent } from '../../../features/pages/homePage/gallery/gallery.component';
import { AboutComponent } from '../../../features/pages/homePage/about/about.component';
import { BestSellerComponent } from '../../../features/pages/homePage/best-seller/best-seller.component';
import { TestPopularItemsComponent } from "../../../features/pages/homePage/test-popular-items/test-popular-items.component";

@Component({
  selector: 'app-home-layout',
  imports: [NavbarComponent, FooterComponent,
    CategoriesComponent, PopularItemsComponent,
    TrustedByComponent, BestSellerComponent,
    GalleryComponent, AboutComponent, TestPopularItemsComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'

})

export class HomeLayoutComponent {

}
