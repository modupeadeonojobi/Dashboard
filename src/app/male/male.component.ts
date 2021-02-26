import { SharedService } from './../shared.service';
import { ApiService } from './../apiservice.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-male',
  templateUrl: './male.component.html',
  styleUrls: ['./male.component.css']
})
export class MaleComponent implements OnInit {

  disableSelect = new FormControl(false);

  searchForm!: FormGroup;



  allUsers: any[] = [];
  allUsersLocal: any[] = [];
  allCountry: any[] = [];

  constructor(private service: ApiService, private fb: FormBuilder,
    private SharedService: SharedService) {
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
    this.service.get_('')
      .subscribe((response: any) => {
        response.results.forEach((result: any) => {
          if (result.gender === 'male') {
            this.allUsers.push(result);
            this.allUsersLocal = this.allUsers;

            this.allCountry = this.allUsers
          }


          // this.allUsersLocal = this.allUsers;
          // this.allCountry = this.allUsers;
        })
        // const allUsers = response.results
        // if (response)
      });
  }

  onSelectionChange($event: any) {
    this.allUsersLocal = this.allUsers.filter(r => {
      return r.location.country == $event
    })
  }

  moreDetails(id: any): any {
    this.SharedService.maleUser = id;
  }

}
