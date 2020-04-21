import { Component } from '@angular/core';

import { Platform, ModalController, AlertController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private alertController: AlertController,
    private modalController: ModalController
  ) {
    this.initializeApp();
    this.platform.backButton.subscribe(async () => {
      try {
        const element = await this.alertController.getTop();
        if (element) {
          element.dismiss();
          return;
        }
      } catch (error) {
        console.log(error);
      }
      try {
        const element = await this.modalController.getTop();
        if (element) {
          element.dismiss();
          return;
        }
      } catch (error) {
        console.log(error);
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });
  }
}
