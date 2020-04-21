import { Component, OnInit } from '@angular/core';

import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {

  constructor(private callNumber: CallNumber) { }

  ngOnInit() {
  }

  onCall() {
    this.callNumber.callNumber('7756911355', true)
    .then( response => console.log(response))
    .catch( error => console.log(error));
  }

}
