import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {

  adminDetails: any = {};

  constructor(
    public modalController: ModalController,
    private global: GlobalService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.adminDetails.username === this.global.adminCredentials.username && this.adminDetails.password === this.global.adminCredentials.password) {
      this.global.showToastMessage('Welcome to Admin Portal.');
      this.modalController.dismiss({success: true});
    } else {
      this.global.showToastMessage('Bad Credentials');
    }
  }

}
