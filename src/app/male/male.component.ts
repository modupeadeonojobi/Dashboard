import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-male',
  templateUrl: './male.component.html',
  styleUrls: ['./male.component.css']
})
export class MaleComponent implements OnInit {

  disableSelect = new FormControl(false);

  searchForm!: FormGroup;

  allUsers: any = [];
  allUsersLocal: any[] = [];
  allCountry: any[] = [];

  constructor(private fb: FormBuilder,
    private SharedService: SharedService, private router: Router) {
  }

  ngOnInit(): void {
    this.maleUsers();
    this.initForm();
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

  maleUsers(): any {
    this.allUsers = sessionStorage.getItem('usersData');
    this.allUsers = JSON.parse(this.allUsers);
    this.allUsers = this.allUsers.filter((r: any) => { return r.gender == 'male' })
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
