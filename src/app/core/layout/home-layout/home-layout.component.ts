import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/ui/navbar/navbar.component';
import { FooterComponent } from "../../../shared/components/ui/footer/footer.component";
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { SpecialGiftsComponent } from "../../../features/pages/special-gifts/special-gifts.component";
import { FeaturesComponent } from "../../../features/pages/features/features.component";

@Component({
  selector: 'app-home-layout',
  imports: [NavbarComponent, FooterComponent, DatePickerModule, FormsModule, SpecialGiftsComponent, FeaturesComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'
})
export class HomeLayoutComponent {
    date1: Date | undefined;

}
