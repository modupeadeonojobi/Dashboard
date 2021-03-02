import { Router } from '@angular/router';
import { SharedService } from './../shared.service';
import { ApiService } from './../apiservice.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  _searchTerm: any;

  users: any;
  allUsers: any[] = [];
  allUsersLocal: any[] = [];
  searchForm!: FormGroup;
  dataItem: any;
  country: any;
  disableSelect = new FormControl(false);
  allCountry: any[] = [];

  fromAppSearch: any;
  loading: boolean = true;


  public static oneUser: any = []


  constructor(private sharedservice: SharedService, private formbuilder: FormBuilder,
    private service: ApiService, private router: Router) {
    this._searchTerm = sessionStorage.getItem('searchTerm');
  }

  ngOnInit(): void {
    this.doSearch();
    this.initForm();
    this.sharedservice.teacherMessage$
      .subscribe(message => {
        this.fromAppSearch = message;
      })
  }


  initForm(): any {
    return this.searchForm = this.formbuilder.group({
      search: ['', Validators.required],
      country: ['']
    });
  }

  get search1(): string {
    let all = this.fromAppSearch
    return this.searchForm?.controls.search.value || all;
  }

  doSearch(): any {
    this.service.get_('')
      .subscribe((response: any) => {
        response.results.forEach((result: any) => {
          this.loading = false;

          this.allUsers.push(result);
          sessionStorage.setItem('usersData', JSON.stringify(this.allUsers));

          this.allUsersLocal = this.allUsers;
          this.allCountry = this.allUsers;
        })

      });
  }


  onSelectionChange($event: any) {
    this.allUsersLocal = this.allUsers.filter(r => {
      return r.location.country == $event
    })
  }

  female(): any {
    this.fromAppSearch = this.allUsers.filter(f => {
      return f.gender.female;
    })
  }

  moreDetails(id: any): any {
    this.sharedservice.itemCollected = id
    this.router.navigate(['/more'])
  }

  get allUsersLocalz() {
    return this.allUsersLocal
  }
}
