import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage {

  items: Array<any> = [];

  constructor(
    private toastController: ToastController,
    ) { }

  onSelectItem(item) {
    if (this.items.includes(item)) {
      this.displayToast(item + ' already added.', 'warning');
    } else {
      this.displayToast(item + ' added for collection.', 'success');
      this.items.push(item);
    }
  }

  displayToast(msg, color) {
    this.toastController.create(
      {
        message: msg,
        duration: 1000,
        color: color,
        position: 'middle'
      }
    ).then(toast => toast.present());
  }

  ionViewDidLeave() {
    this.items.length = 0;
  }

  onSubmit() {
    localStorage.setItem('items', this.items.toString());
  }

}
