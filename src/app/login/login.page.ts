import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SplashPage } from './splash/splash.page';
import { HttpService } from '../services/http.service';

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

  constructor(private modalController: ModalController, private http: HttpService) {
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
    const data = { username: '123456789', password: 'admin@123' };
    // this.http.postCall('/token/', data).subscribe((response: any) => this.responseText = response, error => this.responseText = error);
  }

  showLoading() {
    this.modalController.create(
      {
        component: SplashPage,
        backdropDismiss: false,
        swipeToClose: false,
      }
    ).then(modal => {
      modal.present();
      setTimeout(() => modal.dismiss(), 3000);
    });
    setTimeout(() => {
      this.toDisplay = true;
    }, 3000);
  }

}
