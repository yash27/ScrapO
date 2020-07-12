import { Injectable } from "@angular/core";
import Swal from 'sweetalert2'

@Injectable({providedIn: "root"})
export class GlobalService {

    constructor() {}

    showAlert(message, alertType, subMessage?) {
        if(subMessage) {
            Swal.fire(message, subMessage, alertType);
        } else {
            Swal.fire(message, '', alertType);
        }
    }

}