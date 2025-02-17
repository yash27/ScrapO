import { Component, OnInit } from '@angular/core';
import { UserFirebaseService } from '../services/firebase/userFirebase.service';
import { GlobalService } from '../services/global.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { OrderFirebaseService } from '../services/firebase/orderFirebase.service';
import { OrderDetailsPage } from './order-details/order-details.page';
import { UserDetailsPage } from './user-details/user-details.page';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  selectedSegment: any = 'orders';

  usersList: any = [];
  userFilteredList: any = [];
  ordersList: any = [];
  ordersFilteredList: any = [];

  filtereingTerm: any = 'ALL';

  constructor(
    private userService: UserFirebaseService,
    private global: GlobalService,
    private callNumber: CallNumber,
    private alertController: AlertController,
    private router: Router,
    private orderService: OrderFirebaseService,
    private modalController: ModalController
    ) { }

  ionViewWillEnter() {
    this.loadUsers();
    this.loadOrders();
  }

  ngOnInit() {
  }

  onLogout() {
    this.alertController.create(
      {
        header: 'Logout',
        message: 'Are you sure you want to logout?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Ok',
            handler: () => this.router.navigate(['/login'])
          }
        ]
      }
    ).then(alert => alert.present());
  }

  loadUsers() {
    this.userService.getUsers().subscribe(response => {
      this.usersList = response;
      this.userFilteredList = this.usersList;
    }, error => {
      this.global.showToastMessage('Unable to fetch users list.');
    });
  }

  applyFilter(filteredValue) {
    this.userFilteredList = [];
    filteredValue = filteredValue.toLowerCase();
    this.usersList.filter((v) => {
      if(((v.firstName).toLowerCase()).includes(filteredValue) || ((v.lastName).toLowerCase()).includes(filteredValue) || ((v.username).toLowerCase()).includes(filteredValue) || ((v.email).toLowerCase()).includes(filteredValue) || ((v.username).toLowerCase()).includes(filteredValue)) {
        this.userFilteredList.push(v);
      }
    });
  }

  loadOrders() {
    this.orderService.getOrders().subscribe(order => {
      this.ordersList = order;
      this.ordersFilteredList = this.ordersList;
    }), error => {
      this.global.showToastMessage('Unable to fetch orders list');
    }
  }

  callUser(mobileNumber) {
    this.callNumber.callNumber(mobileNumber, true)
    .then( response => console.log(response))
    .catch( error => console.log(error));
  }

  deleteUser(user, index) {
    this.alertController.create(
      {
        header: 'Confirmation',
        message: 'Are you sure you want to delete the user?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Ok',
            handler: () => {
              this.userService.removeUser(user.id).then(response => {
                this.global.showAlert('Removed', 'success', 'You have removed ' + user.username + ' successfully.');
              }).catch( error => this.global.showToastMessage('Unable to delete user.'));
            }
          }
        ]
      }
    ).then(alert => alert.present());
  }

  viewOrder(order) {
    this.modalController.create(
      {
        component: OrderDetailsPage,
        componentProps: {
          data: order
        }
      }
    ).then(modal => {
      modal.present();
      
    });
  }

  viewUser(user) {
    this.modalController.create(
      {
        component: UserDetailsPage,
        componentProps: {
          data: user
        }
      }
    ).then(modal => {
      modal.present();
      
    });
  }

  onFilterTermChanged() {
    this.ordersFilteredList = [];
    let filterTerm = this.filtereingTerm;
    if(this.filtereingTerm === 'ALL') {
      this.ordersFilteredList = this.ordersList;
    } else {
      this.ordersList.filter((v) => {
        if(filterTerm === v.status) {
          this.ordersFilteredList.push(v);
        }
      });
    }
    
  }

}
