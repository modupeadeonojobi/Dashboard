import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  itemCollected: any[] = [];

  private appSearchTerm = new Subject<string>();
  teacherMessage$ = this.appSearchTerm.asObservable();

  constructor() { }

  sendMessage(message: string) {
    this.appSearchTerm.next(message);

  }
}

