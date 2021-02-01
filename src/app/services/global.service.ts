import { Injectable } from "@angular/core";
import Swal from 'sweetalert2'
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({providedIn: "root"})
export class GlobalService {

    adminCredentials: any = {
        username: 'admin',
        password: 'admin@12345'
    }

    fetchedUser: any = {};

    supportMobileNumber: any;

    constructor(
        private toastController: ToastController,
        private router: Router
    ) {
        // if(localStorage.getItem('user') !== null) {
        //     this.fetchedUser = JSON.parse(localStorage.getItem('user'));
        // } else {
        //     this.showToastMessage('Login failed, please try again');
        //     this.router.navigate(['/login']);
        // }
    }

    showAlert(message, alertType, subMessage?) {
        if(subMessage) {
            Swal.fire(message, subMessage, alertType);
        } else {
            Swal.fire(message, '', alertType);
        }
    }

    showToastMessage(message) {
        this.toastController.create(
            {
                message: message,
                duration: 2000
            }
        ).then(toast => toast.present());
    }

}