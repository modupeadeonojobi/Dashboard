import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'dashboard';

  SearchForm: FormGroup

  constructor(private fb_:FormBuilder){

    this.SearchForm = fb_.group({
      "search": ['']
    });

  }



  ngOnInit(): void {



  }


}
