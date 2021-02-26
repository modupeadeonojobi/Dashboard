import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  itemCollected: any[] = [];

  maleUser: any[] = [];

  private appSearchTerm = new Subject<string>();
  teacherMessage$ = this.appSearchTerm.asObservable();

  constructor() { }


  // itemCollected(id: string[]) {
  //   this.userArray.next(id)

  // }

  sendMessage(message: string) {
    this.appSearchTerm.next(message);

  }
}

