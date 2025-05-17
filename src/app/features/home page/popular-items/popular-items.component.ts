import { Component } from '@angular/core';
import {TabDataComponent} from './components/tab-data/tab-data.component';
import {ContentOfTabComponent} from './components/content-of-tab/content-of-tab.component';
import {SectionTitleComponent} from '../../../shared/components/ui/section-title/section-title.component';

@Component({
  selector: 'app-popular-items',
  imports: [
    SectionTitleComponent,
    ContentOfTabComponent,
    TabDataComponent
  ],
  templateUrl: './popular-items.component.html',
  styleUrl: './popular-items.component.css'
})
export class PopularItemsComponent {

}
