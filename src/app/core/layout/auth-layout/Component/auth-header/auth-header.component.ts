import {Component, inject, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {TranslationService} from '../../../../Services/translation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-header',
  imports: [
    TranslatePipe
  ],
  templateUrl: './auth-header.component.html',
  styleUrl: './auth-header.component.css'
})
export class AuthHeaderComponent implements OnInit {

  private readonly translationService: TranslationService = inject(TranslationService);
  title: string = "";
  private readonly router: Router = inject (Router);

  ngOnInit(): void {
    if(this.router.url?.includes('signin')) {
      this.title = "";
    } else if(this.router.url?.includes('signup')){
      this.title = "Become Part of Our Family";
    }
  }
}
