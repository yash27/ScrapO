import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class OrderFirebaseService {

    private orderCollection: AngularFirestoreCollection<Order>;
    private orders: Observable<Order[]>;

    constructor(private db: AngularFirestore) {
        this.orderCollection = db.collection<Order>('orders');
        this.orders = this.orderCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {id, ...data};
                });
            })
        )
    }

    getOrders() {
        return this.orders;
    }

    getOrder(id) {
        return this.orderCollection.doc<Order>(id).valueChanges();
    }

    upadteOrder(user, id) {
        return this.orderCollection.doc(id).update(user);
    }

    addOrder(user) {
        return this.orderCollection.add(user);
    }

    removeOrder(id) {
        return this.orderCollection.doc(id).delete();
    }

}

export interface Order {
    orderItems: any,
    userName: string,
    userMobile: string,
    address1: string,
    address2: string,
    pincode: string,
    status: string
}