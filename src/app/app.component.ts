import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import  transLationsEN   from '../../public/i18n/en.json';
import  transLationsAR   from '../../public/i18n/ar.json';
@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce-Elevate-Team5';
  constructor(private translate: TranslateService) {
    this.translate.setTranslation('en',transLationsEN);
    this.translate.setTranslation('ar',transLationsAR);
    this.translate.setDefaultLang('ar');
    this.translate.use('ar');
  }
}
