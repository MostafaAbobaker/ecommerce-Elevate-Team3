import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../../shared/components/ui/section-title/section-title.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [TranslateModule,SectionTitleComponent,RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
