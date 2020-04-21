import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-modal',
  templateUrl: './address-modal.page.html',
  styleUrls: ['./address-modal.page.scss'],
})
export class AddressModalPage implements OnInit {

  addressForm = new FormGroup({
    name: new FormControl('', [Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*'), Validators.required]),
    mobile: new FormControl('', [Validators.pattern(/^\d{10}$/), Validators.required]),
    pincode: new FormControl('', [Validators.pattern(/^\d{6}$/), Validators.required]),
    flatNoHouseNo: new FormControl('', [Validators.maxLength(20), Validators.required]),
    floorBuilding: new FormControl('', [Validators.maxLength(20), Validators.required]),
    streetColony: new FormControl('', [Validators.maxLength(20), Validators.required]),
    locality: new FormControl('', [Validators.maxLength(20), Validators.required]),
    landmark: new FormControl('', [Validators.maxLength(20), Validators.required]),
    city: new FormControl('', [Validators.maxLength(20), Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.required])
  });

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  onSubmit() {
    this.modalController.dismiss(this.addressForm.value);
  }

}
