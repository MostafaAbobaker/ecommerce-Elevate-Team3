import {Component, inject} from '@angular/core';
import {AuthCoverComponent} from './Component/auth-cover/auth-cover.component';
import {RouterOutlet} from '@angular/router';
import {ThemeService} from '../../../shared/services/theme/theme.service';

@Component({
  selector: 'app-auth-layout',
  imports: [
    AuthCoverComponent,
    RouterOutlet
  ],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {
  private readonly themeService: ThemeService = inject(ThemeService);

}
