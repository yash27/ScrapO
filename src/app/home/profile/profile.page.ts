import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    public global: GlobalService,
    private router: Router,
    private alertController: AlertController
    ) { }

  ngOnInit() {
  }

  onLogout() {
    this.alertController.create(
      {
        header: 'Message',
        message: 'Are you sure you want to logout?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Logout',
            handler: () => {
              this.global.fetchedUser = {};
              localStorage.clear();
              this.router.navigate(['/login']);
            }
          }
        ]
      }
    ).then(alert => alert.present());
  }

}
