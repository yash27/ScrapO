import { Component } from '@angular/core';

import { Platform, ModalController, AlertController, ActionSheetController, PopoverController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { GlobalService } from './services/global.service';
import { Location } from '@angular/common';
import { OrderFirebaseService } from './services/firebase/orderFirebase.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private alertController: AlertController,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController,
    private popoverController: PopoverController,
    private router: Router,
    private global: GlobalService,
    private location: Location
  ) {
    this.initializeApp();
    this.backButtonEvent();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(9999, async () => {
      try {
        const element = await this.actionSheetController.getTop();
        if (element) {
          element.dismiss();
          return;
        }
      } catch (error) {
        console.log(error);
      }
      try {
        const element = await this.popoverController.getTop();
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
      try {
        const element = await this.alertController.getTop();
        if (element) {
          element.dismiss();
          return
        }
      } catch (error) {
        console.log(error);
      }
      if (this.router.url === '/home') {
        if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
          navigator['app'].exitApp();
        } else {
          this.global.showToastMessage('Press back button again to exit');
          this.lastTimeBackPress = new Date().getTime();
          document.addEventListener('backbutton', function (event) {
            event.preventDefault();
            event.stopPropagation();
          }, false);
        }
      } else if(this.router.url === '/login') {
        document.addEventListener('backbutton', function (event) {
          event.preventDefault();
          event.stopPropagation();
        }, false);
      } else {
        this.location.back();
      }
    });
  }
}
