import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ISpecial, ISpecialGift } from '../../../interfaces/special-gift';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-special-gifts',
  imports: [CarouselModule, TranslateModule],
  templateUrl: './special-gifts.component.html',
  styleUrl: './special-gifts.component.css'
})
export class SpecialGiftsComponent {

  currentLang = localStorage.getItem('lang');
  textDir = 'ltr';

  // Special Gift
  customOptions: OwlOptions = {
    loop: true,
    rtl: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 500,
    navText: ['<img src="assets/imgs/Special-gifts/chevron-right.png" class="w-[20px]" />', '<img src="assets/imgs/Special-gifts/chevron-left.png" class="w-[20px]" />'],
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
      image: '../../../../assets/imgs/Special-gifts/SpecialGift(1).png',
      title: 'SpecialGift(1)'
    },
    {
      image: '../../../../assets/imgs/Special-gifts/SpecialGift(2).png',
      title: 'SpecialGift(2)'
    },
    {
      image: '../../../../assets/imgs/Special-gifts/SpecialGift(3).png',
      title: 'SpecialGift(3)'
    },
  ]


  // Features
  Special: ISpecial[] = [
    {
      image: '../../../../assets/imgs/Special-gifts/special-gift-1.png',
      name: 'special-gifts.meaningful-surprise',
      btn: 'special-gifts.Anniversary'
    },
    {
      image: '../../../../assets/imgs/Special-gifts/special-gift-2.png',
      name: 'special-gifts.beginning',
      btn: 'special-gifts.engagement'
    },
    {
      image: '../../../../assets/imgs/Special-gifts/special-gift-3.png',
      name: 'special-gifts.remember',
      btn: 'special-gifts.wedding'
    }
  ]


}
