import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-female',
  templateUrl: './female.component.html',
  styleUrls: ['./female.component.css']
})
export class FemaleComponent implements OnInit {
  url: string = 'https://jsonplaceholder.typicode.com/users';


  constructor(private http: HttpClient) {
    
   }

  ngOnInit(): void {}

} 
