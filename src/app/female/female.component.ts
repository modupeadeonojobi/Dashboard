import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-female',
  templateUrl: './female.component.html',
  styleUrls: ['./female.component.css']
})
export class FemaleComponent implements OnInit {

  allUsers: any = [];
  femaleUsers: any[] = [];


  constructor() {
  }

  ngOnInit(): void {
    // console.log(all)

    // this.allUsers = JSON.parse(localStorage.getItem('sessio')) || null;



    // console.log(this.allUsers.results)

    // if (this.allUsers.gender === 'female') {
    // this.femaleUsers.push(this.allUsers)
    // console.log(this.allUsers)
    // }
  }

}


