import {Component, Input} from '@angular/core';
import {Categories} from '../../model/categories';

@Component({
  selector: 'app-category-card',
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {

  @Input() category: Categories = {} as Categories;
}
