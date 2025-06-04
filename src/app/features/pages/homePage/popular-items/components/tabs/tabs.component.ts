import {Component, inject, Input} from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';
import {Categories} from '../../../categories/model/categories';
import {ValueOfTapService} from '../../service/value-of-tabs/value-of-tap.service';

@Component({
  selector: 'app-tabs',
  imports: [CommonModule, TabsModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

  private readonly valueOfTapService: ValueOfTapService = inject (ValueOfTapService);

  @Input() category: Categories = {} as Categories;

  valueEmit(valOfTab: string, categoryID: string): void {
    this.valueOfTapService.valueOfTap.set(valOfTab);
    this.valueOfTapService.categoryID.set(categoryID);
  }
}
