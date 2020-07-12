import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpService } from '../services/http.service';
import { GlobalService } from '../services/global.service';
import { AdminLoginPage } from './admin-login/admin-login.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  toDisplay: boolean = true;
  responseText: string;

  public lottieConfig: Object;
  private anim: any;

  constructor(
    private modalController: ModalController, 
    private http: HttpService,
    private global: GlobalService
    ) {
    this.lottieConfig = {
      path: 'assets/anim5.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }
  
  handleAnimation(anim: any) {
    this.anim = anim;
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // this.global.showAlert('Hello', 'success', 'Just woke up');
  }

  openAdmin() {
    this.modalController.create(
      {
        component: AdminLoginPage,
        cssClass: 'adminModal',
        showBackdrop: true,
        backdropDismiss: true
      }
    ).then(modal => modal.present());
  }

}
