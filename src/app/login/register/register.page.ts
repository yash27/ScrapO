import { Component, OnInit } from '@angular/core';
import { UserFirebaseService } from 'src/app/services/firebase/userFirebase.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userDetails: any = {};

  constructor(
    private userService: UserFirebaseService,
    private router: Router,
    private loadingController: LoadingController,
    private global: GlobalService
  ) { }

  ngOnInit() {
  }

  onSubmitData() {
    this.loadingController.create(
      {
        message: 'Please wait while you are getting registered'
      }
    ).then(loader => {
      loader.present();
      this.userService.addUser(this.userDetails).then(result => {
        loader.dismiss();
        this.global.showAlert('User added successfully', 'success' ,'Now login with the registered credentials.');
        this.router.navigate(['/login']);
      }).catch(error => {
        loader.dismiss();
        this.global.showAlert('Some problem occurred while adding user', 'error', 'Please try after some time');
      });
    })
  }

}
