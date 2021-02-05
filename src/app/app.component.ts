import { SharedService } from './shared.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'dashboard';

  searchForm: FormGroup;

  allUsers: any;
  

  constructor(private sharedService: SharedService, private FormBuilder: FormBuilder, private router: Router) {
    this.searchForm = this.FormBuilder.group({
      searchItem: ['', Validators.required]
    });

    // this.SearchForm = fb_.group({
    //   "search": ['']
    // });


  }

  // initializeForm(): any {

  // }

  ngOnInit(): void {
    this.onSubmit();
  }

  onSubmit(): any {
    if (this.searchForm.valid) {
      const appsearchItem = this.searchForm.controls.searchItem.value;
      localStorage.setItem('searchTerm', JSON.stringify(appsearchItem));
      this.searchForm.reset();
      this.sharedService.sendMessage(appsearchItem); 

      return
    }
  }

  female(): any {
    let genderF = "female";
    this.sharedService.sendMessage(genderF);

  }

  male(): any {
    let genderM = "male";
    this.sharedService.sendMessage(genderM)
  }

  next(): any {
    //    this.router.navigateByUrl('/home');
  }


}
