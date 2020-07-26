import { Component } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { AddressFillingPage } from './address-filling/address-filling.page';
import { GlobalService } from 'src/app/services/global.service';
import { OrderFirebaseService } from 'src/app/services/firebase/orderFirebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.page.html',
  styleUrls: ['./submission.page.scss'],
})
export class SubmissionPage {

  items: Array<any> = [];
  finalSubmitObj : any = {};
  isFillingAddress: boolean;
  isAddressFilled: boolean = false;

  constructor(
    private modalController: ModalController,
    private global: GlobalService,
    private loadingController: LoadingController,
    private orderService: OrderFirebaseService,
    private router: Router
  ) { }

  ionViewDidEnter() {
    this.items = localStorage.getItem('items').split(',');
    console.log(this.items);
  }

  onAddAddress() {
    this.modalController.create(
      {
        component: AddressFillingPage,
        cssClass: 'adminModal',
        showBackdrop: true,
        backdropDismiss: true
      }
    ).then(modal => {
      this.isFillingAddress = true;
      modal.present();
      modal.onDidDismiss().then(data => {
        if(data.data) {
          data = data.data;
          data = data.data;
          this.finalSubmitObj = Object.assign(this.finalSubmitObj, data);
          this.isAddressFilled = true;
        }
        this.isFillingAddress = false;
      });
    });
  }

  onCreateOrder() {
    if(this.isAddressFilled) {
      this.finalSubmitObj['orderItems'] = this.items;
      this.finalSubmitObj['userName'] = this.global.fetchedUser.firstName + ' ' + this.global.fetchedUser.lastName;
      this.finalSubmitObj['userMobile'] = this.global.fetchedUser.mobile;
      this.finalSubmitObj['status'] = 'PENDING';
      this.loadingController.create(
        {
          message: 'Please wait while your order is getting iniitated...',
        }
      ).then(loader => {
        loader.present();
        this.orderService.addOrder(this.finalSubmitObj).then(response => {
          loader.dismiss();
          this.global.showAlert('Order successfully placed', 'success', '');
          this.router.navigate(['/home']);
        })
      });
    } else {
      this.global.showToastMessage('Please add address first.');
    }
  }

  ionViewDidLeave() {
    this.items.length = 0;
  }

}
