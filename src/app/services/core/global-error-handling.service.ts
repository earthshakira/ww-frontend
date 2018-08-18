import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlingService {

  constructor() { }

    static handle(err: any) {
      console.log(err);
      throw err;
    }
}
