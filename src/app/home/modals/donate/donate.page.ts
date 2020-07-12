import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {

  constructor(public modalController: ModalController, private alertController: AlertController) { }

  ngOnInit() {
  }

  donate() {
    this.alertController.create(
      {
        header: 'Message',
        message: 'Thank you for your donations.',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              this.modalController.dismiss()
            }
          }
        ]
      }
    ).then(alert => alert.present());
  }

}
