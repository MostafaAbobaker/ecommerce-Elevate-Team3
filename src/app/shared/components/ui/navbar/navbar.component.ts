import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn:boolean = true;
  isMenuOpen:boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
