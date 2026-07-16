import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  message: string = '';

  type: string = 'success';

  show(message: string, type: string = 'success') {

    this.message = message;
    this.type = type;

    setTimeout(() => {

      this.message = '';

    }, 3000);

  }

}