import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  orderDetails: any = {};

  constructor(
    public modalController: ModalController,
    private navParams: NavParams,
    private callNumber: CallNumber
  ) { }

  ionViewWillEnter() {
    this.orderDetails = this.navParams.get('data');
  }

  ngOnInit() {
  }

  callUser(mobileNumber) {
    this.callNumber.callNumber(mobileNumber, true)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

}
