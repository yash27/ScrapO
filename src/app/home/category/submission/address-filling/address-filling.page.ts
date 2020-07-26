import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-address-filling',
  templateUrl: './address-filling.page.html',
  styleUrls: ['./address-filling.page.scss'],
})
export class AddressFillingPage implements OnInit {

  address: any = {};

  constructor(
    public modalController: ModalController,
    private global: GlobalService
  ) { }

  ngOnInit() {
  }

  onSubmitAddress() {
    if(this.address.pincode > 100000 && this.address.pincode < 999999) {
      this.modalController.dismiss({data: this.address});
    } else {
      this.global.showToastMessage('Pincode must be 6 digits');
    }
  }

}
