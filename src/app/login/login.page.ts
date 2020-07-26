import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { HttpService } from '../services/http.service';
import { GlobalService } from '../services/global.service';
import { AdminLoginPage } from './admin-login/admin-login.page';
import { Router } from '@angular/router';
import { UserFirebaseService } from '../services/firebase/userFirebase.service';

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

  userDetails: any = {};

  showAdminLoginIcon:boolean = true;

  constructor(
    private modalController: ModalController,
    private global: GlobalService,
    private router: Router,
    private userService: UserFirebaseService,
    private loadingController: LoadingController
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
  }

  openAdmin() {
    this.showAdminLoginIcon = false;
    this.modalController.create(
      {
        component: AdminLoginPage,
        cssClass: 'adminModal',
        showBackdrop: true,
        backdropDismiss: true
      }
    ).then(modal => {
      modal.present();
      modal.onDidDismiss().then((data: any) => {
        if(data.data) {
          data = data.data;
          if(data.success) {
            this.router.navigate(['/admin']);
          }
        }
        this.showAdminLoginIcon = true;
      })
    });
  }

  onSubmit() {
    this.loadingController.create(
      {
        message: 'Please wait while you are getting logged in...'
      }
    ).then(
      loader => {
        loader.present();
        this.userService.getUsers().subscribe((userList: any) => {
          let fetchedUser = userList.filter(user => {
            return user.username === this.userDetails.username && user.password === this.userDetails.password
          });
          if(fetchedUser.length > 0) {
            this.global.showToastMessage('You have successfully logged in.');
            this.global.fetchedUser = fetchedUser[0];
            localStorage.setItem('user', JSON.stringify(this.global.fetchedUser));
            this.router.navigate(['/home']);
          } else {
            this.global.showToastMessage('Wrong username and password.');
          }
          loader.dismiss();
        });
      }
    )
  }

}
