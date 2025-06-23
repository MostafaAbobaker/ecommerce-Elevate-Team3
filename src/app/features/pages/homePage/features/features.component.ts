import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface IFeatures {
  icon: string,
  name: string,
  description: string
}

@Component({
  selector: 'app-features',
  imports: [TranslateModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {


  Features: IFeatures[] = [
    {
      icon: 'fa-solid fa-wallet fa-2x',
      name: 'features.free-delivery',
      description: 'features.orders-over'
    },
    {
      icon: 'fa-solid fa-rotate fa-2x',
      name: 'features.get refund',
      description: 'features.days'
    },
    {
      icon: 'fa-solid fa-headset fa-2x',
      name: 'features.safe-payment',
      description: 'features.secure-Payment'
    },
    {
      icon: 'fa-solid fa-truck fa-2x',
      name: 'features.support',
      description: 'features.feel-free'
    },
  ]

}

