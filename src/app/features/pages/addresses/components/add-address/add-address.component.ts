import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddressService } from '../../services/address.service';
import { GoogleMapsModule } from '@angular/google-maps';
import { IAddress } from '../../models/address';
import { CommonModule } from '@angular/common';
import { StepsModule } from 'primeng/steps';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import {NgxIntlTelInputModule,SearchCountryField, CountryISO, PhoneNumberFormat} from 'ngx-intl-tel-input'

@Component({
  selector: 'app-add-address',
  imports: [ReactiveFormsModule, GoogleMapsModule, CommonModule, StepsModule,
    ButtonModule, InputTextModule, TextareaModule,NgxIntlTelInputModule],
  templateUrl: './add-address.component.html',
  styleUrl: './add-address.component.css',
  providers: [MessageService]
})
export class AddAddressComponent implements OnInit {

  subscription: Subscription = new Subscription();
  stepIndex = 0;
  latitude = 30.0444; // default Cairo
  longitude = 31.2357;
  zoom = 14;
  addressForm!: FormGroup;
  addressId?: string;
  mode: 'add' | 'edit' = 'add';

  private fb = inject(FormBuilder);
  private _addressService = inject(AddressService);
  private messageService = inject(MessageService);
  private config = inject(DynamicDialogConfig)
  private ref = inject(DynamicDialogRef)

  constructor() { }

  ngOnInit() {
    this.addressForm = this.fb.group({
      city: ['', Validators.required],
      street: ['', Validators.required],
      phone: ['', Validators.required],
      username: ['', Validators.required]
    });

    this.mode = this.config.data?.mode;
    if (this.mode === 'edit' && this.config.data?.address) {
      const addr: IAddress = this.config.data.address;
      this.addressId = addr._id;
      this.addressForm.patchValue(addr);
      console.log(addr);
      
    }
  }
  
  // tel
  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  
  nextStep() {
    if (this.addressForm.valid) {
      this.stepIndex = 1;
    }
  }

  findMyLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.latitude = pos.coords.latitude;
        this.longitude = pos.coords.longitude;
      });
    }
  }

  onMapClick(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.latitude = event.latLng.lat();
      this.longitude = event.latLng.lng();
    }
  }

  saveAddress() {
    const payload: IAddress = {
      ...this.addressForm.value,
      lat: this.latitude.toString(),
      long: this.longitude.toString()
    } as IAddress;

    if (this.addressForm.invalid) return;

    if (this.mode === 'add') {
      this._addressService.addAddress(payload).subscribe(() => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Address added successfully' });
        this.ref.close(true);
      });
    } else if (this.mode === 'edit' && this.addressId) {
      this._addressService.updateAddress(this.addressId, payload).subscribe(() => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Address updated successfully' });
        this.ref.close(true);
      });
    }
  }

}
