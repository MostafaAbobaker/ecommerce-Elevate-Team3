import { Component } from '@angular/core';

interface IFeatures {
  icon: string,
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

  currentLang = localStorage.getItem('lang')

  Features: IFeatures[] = [
    {
      icon: 'fa-solid fa-wallet fa-2x',
      name: 'Free Delivery',
      description: 'Orders Over $120'
    },
    {
      icon: 'fa-solid fa-rotate fa-2x',
      name: 'Get Refund',
      description: 'Within 30 Days Returns'
    },
    {
      icon: 'fa-solid fa-headset fa-2x',
      name: 'Safe Payment',
      description: '100% Secure Payment'
    },
    {
      icon: 'fa-solid fa-truck fa-2x',
      name: '24/7 Support',
      description: 'Feel Free To Call Us'
    },
  ]

}

