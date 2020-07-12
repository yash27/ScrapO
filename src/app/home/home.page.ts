import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DonatePage } from './modals/donate/donate.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onDonate() {
    this.modalController.create(
      {
        component: DonatePage
      }
    ).then(modal => modal.present());
  }

}
