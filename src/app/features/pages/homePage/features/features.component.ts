import { Component } from '@angular/core';

interface IFeatures {
  image: string,
  name: string,
  description: string
}

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  Features: IFeatures[] = [
    {
      image: '../../../../assets/imgs/Features/features-1.png',
      name: 'Free Delivery',
      description: 'Orders Over $120'
    },
    {
      image: '../../../../assets/imgs/Features/features-2.png',
      name: 'Get Refund',
      description: 'Within 30 Days Returns'
    },
    {
      image: '../../../../assets/imgs/Features/features-3.png',
      name: 'Safe Payment',
      description: '100% Secure Payment'
    },
    {
      image: '../../../../assets/imgs/Features/features-4.png',
      name: '24/7 Support',
      description: 'Feel Free To Call Us'
    },
  ]

}
