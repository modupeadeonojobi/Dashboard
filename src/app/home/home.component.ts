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

  @Input() public found: string;

  constructor(private formbuilder: FormBuilder, private service: ApiService) {
    this._searchTerm = localStorage.getItem('searchTerm');
    this.found = this._searchTerm;
    console.log(this.found, 'eki');

  }

  ngOnInit(): void {
    this.doSearch();
    this.initForm();
  }


  initForm(): any {
    return this.searchForm = this.formbuilder.group({
      search: ['', Validators.required],
      country: ['']
    });
  }

  get search1(): string {
    return this.searchForm?.controls.search.value;
  }

  set searchTerm(_searchTerm: string) {
    this.searchForm?.controls.searchTerm.setValue(_searchTerm);
    console.log(    this.searchForm?.controls.searchTerm.setValue(_searchTerm)
    )

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
