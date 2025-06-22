import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/ui/navbar/navbar.component';
import { FooterComponent } from "../../../shared/components/ui/footer/footer.component";
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { SpecialGiftsComponent } from "../../../features/pages/homePage/special-gifts/special-gifts.component";
import { FeaturesComponent } from "../../../features/pages/homePage/features/features.component";
import { CategoriesComponent } from '../../../features/pages/homePage/categories/categories.component';
import { TrustedByComponent } from '../../../features/pages/homePage/trusted-by/trusted-by.component';
import { GalleryComponent } from '../../../features/pages/homePage/gallery/gallery.component';
import { AboutComponent } from '../../../features/pages/homePage/about/about.component';
import { BestSellerComponent } from '../../../features/pages/homePage/best-seller/best-seller.component';
import { TestPopularItemsComponent } from "../../../features/pages/homePage/popular-items/popular-items.component";
import { HeaderComponent } from '../../../shared/components/ui/header/header.component';


@Component({
  selector: 'app-home-layout',
  imports: [NavbarComponent, FooterComponent,
    CategoriesComponent, NavbarComponent, FooterComponent, DatePickerModule, FormsModule, SpecialGiftsComponent, FeaturesComponent,
    TrustedByComponent, BestSellerComponent,
    GalleryComponent, AboutComponent, HeaderComponent, TestPopularItemsComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'

})

export class HomeLayoutComponent {

}
