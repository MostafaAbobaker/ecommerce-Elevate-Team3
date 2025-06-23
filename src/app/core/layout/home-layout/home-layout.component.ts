import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/ui/navbar/navbar.component';
import { FooterComponent } from "../../../shared/components/ui/footer/footer.component";
import { HeaderComponent } from '../../../shared/components/ui/header/header.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home-layout',
  imports: [NavbarComponent, FooterComponent, RouterModule, HeaderComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'

})

export class HomeLayoutComponent {

}
