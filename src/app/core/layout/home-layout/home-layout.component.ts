import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/ui/navbar/navbar.component';
import { FooterComponent } from "../../../shared/components/ui/footer/footer.component";
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { TrustedByComponent } from "../../../features/pages/trusted-by/trusted-by.component";

@Component({
  selector: 'app-home-layout',
  imports: [NavbarComponent, FooterComponent, DatePickerModule, FormsModule, TrustedByComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'
})
export class HomeLayoutComponent {
    date1: Date | undefined;

}
