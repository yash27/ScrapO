import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

  userDetails: any = {};

  constructor(
    public modalController: ModalController,
    private navParams: NavParams,
  ) { }

  ionViewWillEnter() {
    this.userDetails = this.navParams.get('data');
  }

  ngOnInit() {
  }

}
