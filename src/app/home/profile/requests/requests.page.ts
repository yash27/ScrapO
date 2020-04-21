import { Component, ViewChild } from '@angular/core';
import { IonSlides, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage {

  @ViewChild('slides', { static: true }) slider: IonSlides;

  data: any = {
    pending: [],
    completed: [],
    cancelled: []
  }

  segment = 0;

  constructor(
    private alertController: AlertController
  ) { }

  ionViewWillEnter() {
    this.data = {
      pending: [],
      completed: [],
      cancelled: []
    }
    for (var i = 0; i < 3; i++) {
      this.data.pending.push(this.generateRandomNumber(10000, 90000));
    }
    for (var i = 0; i < 2; i++) {
      this.data.completed.push(this.generateRandomNumber(10000, 90000));
    }
    for (var i = 0; i < 5; i++) {
      this.data.cancelled.push(this.generateRandomNumber(10000, 90000));
    }
  }

  ngOnInit() {
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  generateRandomNumber(maximum, minimum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }

  openAlert(orderId, status) {
    let cssClass;
    switch (status) {
      case 'Pending': cssClass = 'pendingClass'; break;
      case 'Completed': cssClass = 'completedClass'; break;
      case 'Cancelled': cssClass = 'cancelledClass'; break;
    }
    this.alertController.create(
      {
        header: 'Order Details',
        subHeader: 'NOTE: Details are not editable.',
        inputs: [
          {
            disabled: true,
            value: 'Order ID: ' + orderId,
          },
          {
            value: 'Status: ' + status,
            disabled: true,
          },
          {
            type: 'textarea',
            value: 'Address: Plot No. 163, ABC Colony, Nagpur. 440001',
            disabled: true
          }
        ],
        buttons: [
          {
            text: 'Ok',
            role: 'ok',
          },
          {
            text: status,
            cssClass: cssClass,
            handler: () => false
          }
        ],
        backdropDismiss: false
      }
    ).then(alert => alert.present());
  }

}
