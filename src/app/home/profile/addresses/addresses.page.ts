import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { AddressModalPage } from '../../modals/address-modal/address-modal.page';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.page.html',
  styleUrls: ['./addresses.page.scss'],
})
export class AddressesPage implements OnInit {

  addresses: Array<any> = [];

  constructor(public modalController: ModalController, private alertController: AlertController) { }

  ngOnInit() {
  }

  onAddAddress() {
    const modal = this.modalController.create(
      {
        component: AddressModalPage,
        swipeToClose: true,
      }
    ).then( modal => {
      modal.present();
      modal.onDidDismiss().then( data => {
        if(data.data) {
          this.addresses.push(data.data);
        }
      })
    });
  }

  onDeleteAddress(index) {
    this.alertController.create(
      {
        header: 'Message',
        message: 'Are you sure you wanna delete this address?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Delete',
            cssClass: 'deleteAddressAlertBtn',
            handler: () => {
              this.addresses.splice(index, 1);
            }
          }
        ]
      }
    ).then( alert => alert.present());
  }
}
