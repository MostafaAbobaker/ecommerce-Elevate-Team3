import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/ui/navbar/navbar.component';
import { FooterComponent } from "../../../shared/components/ui/footer/footer.component";
import {CategoriesComponent} from '../../../features/home page/categories/categories.component';
import {PopularItemsComponent} from '../../../features/home page/popular-items/popular-items.component';
import { TrustedByComponent } from "../../../features/pages/trusted-by/trusted-by.component";
import { BestSellerComponent } from "../../../features/pages/best-seller/best-seller.component";
import { GalleryComponent } from "../../../features/pages/gallery/gallery.component";
import { AboutComponent } from "../../../features/pages/about/about.component";

@Component({
  selector: 'app-home-layout',
  imports: [NavbarComponent, FooterComponent,
            CategoriesComponent, PopularItemsComponent ,
            TrustedByComponent, BestSellerComponent,
            GalleryComponent, AboutComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'

})

export class HomeLayoutComponent {

}
