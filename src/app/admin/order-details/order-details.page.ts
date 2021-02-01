import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, LoadingController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { OrderFirebaseService } from 'src/app/services/firebase/orderFirebase.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  orderDetails: any = {};
  orderStatus: any;
  isStatusChanged: boolean;
  
  constructor(
    public modalController: ModalController,
    private navParams: NavParams,
    private callNumber: CallNumber,
    private orderService: OrderFirebaseService,
    private loadingController: LoadingController,
    private global: GlobalService
  ) { }

  ionViewWillEnter() {
    this.orderDetails = this.navParams.get('data');
    this.orderStatus = this.orderDetails.status;
  }

  ngOnInit() {
  }

  callUser(mobileNumber) {
    this.callNumber.callNumber(mobileNumber, true)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  onStatusChanged() {
    if(this.orderDetails.status !== this.orderStatus) {
      this.isStatusChanged = true;
    } else {
      this.isStatusChanged = false;
    }
  }

  changeOrderStatus() {
    this.loadingController.create(
      {
        message: 'Please wait...'
      }
    ).then(loader => {
      loader.present();
      this.orderDetails.status = this.orderStatus;
      this.orderService.upadteOrder(this.orderDetails, this.orderDetails.id).then(response => {
        loader.dismiss();
        this.global.showToastMessage('Order Status changed successfully');
        this.modalController.dismiss();
      }).catch(error => {
        this.global.showToastMessage('Problem occurred while updating status. Try after some time');
        loader.dismiss();
      });
    });
  }

}
