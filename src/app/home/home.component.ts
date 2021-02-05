import { SharedService } from './../shared.service';
import { ApiService } from './../apiservice.service';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


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


  constructor(private sharedservice: SharedService, private formbuilder: FormBuilder, private service: ApiService) {
    this._searchTerm = localStorage.getItem('searchTerm');
  }

  ngOnInit(): void {
    this.doSearch();
    this.initForm();
    this.sharedservice.teacherMessage$
      .subscribe(message => {
        this.fromAppSearch = message;
      //   if (this.fromAppSearch === 'female') {
      //    this.allUsers = this.allUsers.filter(r =>{return r.gender ==='female'})
      //     this.allUsersLocal = this.allUsers;
      //   } 
      //   if (this.fromAppSearch === 'male') {
      //     this.allUsers = this.allUsers.filter(t =>{return t.gender ==='male'})
      //     this.allUsersLocal = this.allUsers;
      //   } 
      //   if (this.fromAppSearch = message) {
      //     this.allUsersLocal = this.allUsers;

      //   }
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
    for (let i = 1; i <= 4; i++) {
      this.service.get_('')
        .subscribe((data: any) => {
          this.allUsers.push(data.results[0])
          this.allUsersLocal = this.allUsers
          this.allCountry.push(data.results[0])
        })
    }
  }


  onSelectionChange($event: any) {
    this.allUsersLocal = this.allUsers.filter(r => {
      return r.location.country == $event
    })
  }

  female(): any {
    this.fromAppSearch = this.allUsers.filter(f => {
      console.log(f.gender.female, 'IT IS I')
      return f.gender.female;

    })

  // }



  // getInfo(userSearchTerm?: any, isFirstTime?: boolean): any{
  //   let searchTerm = localStorage.getItem('searchTerm');

  //   if(userSearchTerm === searchTerm && !isFirstTime) {
  //     this.dataItem = localStorage.getItem('searchData');
  //     return;
  //   }
  //   else{
  //     this.doSearch();
  //   }
  // }

  // handleSearch(): any {
  //   this.getInfo(this.search, false)
  // }

  
  }

  get allUsersLocalz(){
    return this.allUsersLocal
  }
}
