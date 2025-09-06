import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { IAddress, IResponseAddress } from '../../models/address';
import { AddressService } from '../../services/address.service';
import { AddAddressComponent } from '../add-address/add-address.component';
import { Dialog } from "primeng/dialog";

@Component({
  selector: 'app-all-address',
  imports: [Dialog],
  templateUrl: './all-address.component.html',
  styleUrl: './all-address.component.css'
})
export class AllAddressComponent implements OnInit, OnDestroy {

  visibleDelete: boolean = false;
  addressesList: IAddress[] = [];
  ref: DynamicDialogRef | undefined;

  subscription: Subscription = new Subscription;
  private _addressService = inject(AddressService);
  private messageService = inject(MessageService);
  private dialogService = inject(DialogService)

  ngOnInit(): void {
    this.getAllAddresses();
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

  // delete address
  showDeleteDialog() {
    this.visibleDelete = true;
  }

  deleteAddress(id: string) {
    this._addressService.deleteAddress(id).subscribe({
      next: (res: IResponseAddress) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
        this.visibleDelete = false;
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
        this.getAllAddresses()
      }
    });
  }
  // edit address
  showEditAddress(address: IAddress) {
    const ref = this.dialogService.open(AddAddressComponent, {
      header: 'Update Address Info',
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
        this.getAllAddresses()
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
