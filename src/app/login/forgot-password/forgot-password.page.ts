import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  backButtonSubscription: Subscription;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  verifyOTP() {
    this.alertController.create(
      {
        inputs: [
          {
            id: 'otpNumber',
            type: 'number',
            placeholder: 'OTP'
          }
        ],
        buttons: [
          {
            text: 'Submit',
            role: 'submit'
          }
        ],
        backdropDismiss: false,
        message: 'Enter Received OTP'
      }
    ).then(alert => alert.present());
  }

}
