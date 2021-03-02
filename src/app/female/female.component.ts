import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-female',
  templateUrl: './female.component.html',
  styleUrls: ['./female.component.css']
})
export class FemaleComponent implements OnInit {

  allUsers: any = [];
  allUsersLocal: any;
  allCountry: any[] = [];

  disableSelect = new FormControl(false);

  searchForm!: FormGroup;


  constructor(private SharedService: SharedService,
    private router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
    this.femaleUsers();
  }

  initForm(): any {
    return this.searchForm = this.fb.group({
      search: ['', Validators.required],
      country: ['']
    })
  }

  get search1(): string {
    return this.searchForm?.controls.search.value;
  }

  femaleUsers(): any {
    this.allUsers = sessionStorage.getItem('usersData');
    this.allUsers = JSON.parse(this.allUsers);
    this.allUsers = this.allUsers.filter((r: any) => { return r.gender == 'female' })
    this.allUsersLocal = this.allUsers;
    this.allCountry = this.allUsers;
  }

  onSelectionChange($event: any) {
    this.allUsersLocal = this.allUsers.filter((r: any) => {
      return r.location.country == $event
    })
  }

  moreDetails(id: any): any {
    this.SharedService.itemCollected = id;
    this.router.navigate(['/more'])
  }

}