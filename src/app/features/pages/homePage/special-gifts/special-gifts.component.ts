import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ISpecial, ISpecialGift } from '../../../interfaces/special-gift';

@Component({
  selector: 'app-special-gifts',
  imports: [CarouselModule],
  templateUrl: './special-gifts.component.html',
  styleUrl: './special-gifts.component.css'
})
export class SpecialGiftsComponent {
  // Special Gift
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 500,
    navText: ['<img src="../../../../assets/imgs/Special-gifts/left.png" class="w-[10px]" />', '<img src="../../../../assets/imgs/Special-gifts/right.png" class="w-[10px]" />'],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

  // SpecialGift
  SpecialGift: ISpecialGift[] = [
    {
      image: '../../../../assets/imgs/Special-gifts/SpecialGift(1).jpg',
      title: 'SpecialGift(1)'
    },
    {
      image: '../../../../assets/imgs/Special-gifts/SpecialGift(2).jpg',
      title: 'SpecialGift(2)'
    },
    {
      image: '../../../../assets/imgs/Special-gifts/SpecialGift(3).jpg',
      title: 'SpecialGift(3)'
    },
    {
      image: '../../../../assets/imgs/Special-gifts/SpecialGift(4).jpg',
      title: 'SpecialGift(4)'
    }
  ]


  // Features
  Special: ISpecial[] = [
    {
      image: '../../../../assets/imgs/Special-gifts/special-gift-1.png',
      name: 'Gifts Box',
      description: 'Awesome Gifts Box Collectons',
      btn: 'Shop Now'
    },
    {
      image: '../../../../assets/imgs/Special-gifts/special-gift-2.png',
      name: 'Occasion Gifts',
      description: 'Best Occasion Gifts Collections',
      btn: 'Discover Now'
    },
    {
      image: '../../../../assets/imgs/Special-gifts/special-gift-3.png',
      name: 'Occasion Gifts',
      description: 'Combo Sets Gift Box Up To 50% Off',
      btn: 'Discover Now'
    }
  ]


}
