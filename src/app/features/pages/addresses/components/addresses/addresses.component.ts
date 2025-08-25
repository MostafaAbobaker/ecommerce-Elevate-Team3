import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CarouselModule } from 'primeng/carousel';

import { StepsModule } from 'primeng/steps';
import { ItemProductComponent } from '../../../../../shared/components/ui/item-product/item-product.component';
import { SummaryComponent } from '../../../../../shared/components/ui/summary/summary.component';
import { IAddress, IResponseAddress } from '../../models/address';
import { IProduct } from '../../../../interfaces/iproduct';
import { AddressService } from '../../services/address.service';
import { BestSellerService } from '../../../homePage/best-seller/services/best-seller.service';
import { AddAddressComponent } from '../add-address/add-address.component';

@Component({
  selector: 'app-addresses',
  imports: [SummaryComponent, ButtonModule, StepperModule, CommonModule, StepsModule,
      DialogModule, ButtonModule, InputTextModule, CarouselModule, ItemProductComponent],
  templateUrl: './addresses.component.html',
  styleUrl: './addresses.component.css',
  providers: [MessageService, DialogService]

})
export class AddressesComponent {

  stepIndex = 0;
  addressesList: IAddress[] = [];
  selectedAddressId: string | null = null;
  visible: boolean = false;
  visibleDelete: boolean = false;
  ref: DynamicDialogRef | undefined;
  productsList: IProduct[] = [];
  responsiveOptions: any[] | undefined;

  subscription: Subscription = new Subscription;
  private _addressService = inject(AddressService);
  private messageService = inject(MessageService);
  private dialogService = inject(DialogService)
  private _bestSellerService = inject(BestSellerService)

  ngOnInit(): void {
    this.getAllAddresses();
    this.setResponsiveOptions();
    this.getBestSellers();
  }

  nextStep() {
    this.stepIndex = 1;
  }
  backStep() {
    this.stepIndex = 0;
  }

  getAllAddresses() {
    this.subscription = this._addressService.allAddresses().subscribe({
      next: (res) => {
        this.addressesList = res?.addresses;
      }, error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message });
      }
    })
  }

  showDialog() {
    this.visible = true;
  }

  // delete address
  showDeleteDialog() {
    this.visibleDelete = true;
  }

  deleteAddress(id: string) {
    this._addressService.deleteAddress(id).subscribe({
      next: (res: IResponseAddress) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
        this.visibleDelete = false;
        this.visible = false;
        this.getAllAddresses();
      }, error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message });
      }
    })
  }

  // add address
  showAddAddress() {
    const ref = this.dialogService.open(AddAddressComponent, {
      header: 'Add a New Address',
      width: '50vw',
      maximizable: true,
      closable: true,
      modal: true,
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
      },
      data: { mode: 'add' }
    });

    ref.onClose.subscribe(success => {
      if (success) {
        this.visible = false;
        this.getAllAddresses()
      }
    });
  }
  // edit address
  showEditAddress(address: IAddress) {
    const ref = this.dialogService.open(AddAddressComponent, {
      header: 'Update Address Info',
      style: {

      },
      width: '50vw',
      maximizable: true,
      closable: true,
      modal: true,
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
      },
      data: { mode: 'edit', address }
    });

    ref.onClose.subscribe(success => {
      if (success) {
        this.visible = false;
        this.getAllAddresses()
      }
    });
  }

  getBestSellers() {
    this._bestSellerService.getBestSellers().subscribe({
      next: (response) => {
        this.productsList = response.bestSeller as IProduct[];
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message });

      }
    });
  }

  setResponsiveOptions() {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 4,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
      }
    ]
  }

  selectAddress(id: string) {
    this.selectedAddressId = id;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


}
