import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../../shared/components/ui/section-title/section-title.component';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { NgClass } from "../../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";
import { IItemProduct } from '../../../shared/components/ui/item-product/model/iitem-product';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-orders',
  imports: [ DatePipe, CurrencyPipe, SectionTitleComponent,TranslateModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  isShow:boolean = false
  orderNo:number= 12345;

  dateOrder:Date = new Date();

  price:number =1820;
  priceProduct:number =1820;
  status:string = 'In Progress'
  paymentMethod:string = 'Cash'
  deliveryStatus:string = 'Pending'

  orderProduct:IItemProduct[] = []
}
