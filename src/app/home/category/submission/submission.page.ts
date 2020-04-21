import { Component } from '@angular/core';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.page.html',
  styleUrls: ['./submission.page.scss'],
})
export class SubmissionPage {

  items: Array<any> = [];

  constructor() { }

  ionViewDidEnter() {
    this.items = localStorage.getItem('items').split(',');
  }

  ionViewDidLeave() {
    this.items.length = 0;
  }

}
