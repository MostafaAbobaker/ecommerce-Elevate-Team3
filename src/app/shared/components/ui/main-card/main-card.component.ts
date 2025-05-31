import {Component, Input} from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {PopularItems} from '../../../../features/home page/popular-items/model/popular-items';

@Component({
  selector: 'app-main-card',
  imports: [CardModule, ButtonModule],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.css'
})
export class MainCardComponent {

  @Input() popularItem: PopularItems = {} as PopularItems;

}
