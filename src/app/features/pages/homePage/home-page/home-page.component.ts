import { Component } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { SpecialGiftsComponent } from '../special-gifts/special-gifts.component';
import { FeaturesComponent } from '../features/features.component';
import { TrustedByComponent } from '../trusted-by/trusted-by.component';
import { BestSellerComponent } from '../best-seller/best-seller.component';
import { TestPopularItemsComponent } from '../popular-items/popular-items.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home-page',
  imports: [CategoriesComponent,
            SpecialGiftsComponent,
            FeaturesComponent,
            TrustedByComponent,
            BestSellerComponent,
            TestPopularItemsComponent,
            GalleryComponent,
            AboutComponent,],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
