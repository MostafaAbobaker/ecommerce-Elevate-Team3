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
    navText: ['<img src="assets/imgs/Special-gifts/chevron-left.png" class="w-[20px]" />', '<img src="assets/imgs/Special-gifts/chevron-right.png" class="w-[20px]" />'],
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
      name: 'Celebrate Her Forever with a Gift She’ll Always Remember',
      btn: 'Wedding'
    },
    {
      image: '../../../../assets/imgs/Special-gifts/special-gift-2.png',
      name: 'Honor the Beginning of a Beautiful Journey Together',
      btn: 'Engagement'
    },
    {
      image: '../../../../assets/imgs/Special-gifts/special-gift-3.png',
      name: 'Mark Every Year of Love with a Meaningful Surprise',
      btn: 'Anniversary'
    }
  ]


}
