import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class UserFirebaseService {

    private userCollection: AngularFirestoreCollection<User>;
    private users: Observable<User[]>;

    constructor(private db: AngularFirestore) {
        this.userCollection = db.collection<User>('users');
        this.users = this.userCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {id, ...data};
                });
            })
        )
    }

    getUsers() {
        return this.users;
    }

    getUser(id) {
        return this.userCollection.doc<User>(id).valueChanges();
    }

    upadteTodo(user, id) {
        return this.userCollection.doc(id).update(user);
    }

    addUser(user) {
        return this.userCollection.add(user);
    }

    removeTodo(id) {
        return this.userCollection.doc(id).delete();
    }

}

export interface User {
    username: string,
    mobile: string,
    email: string,
    password: string
}