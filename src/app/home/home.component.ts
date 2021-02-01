import { ApiService } from './../apiservice.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  allUsers:any[] = [];
  searchForm!: FormGroup;
  // colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));
  dataItem: any;
  country: any;

  constructor(private formbuilder: FormBuilder, private service: ApiService) { 
    this._searchTerm = localStorage.getItem('searchTerm');
    // console.log(this._searchTerm)
    // this.getInfo(this._searchTerm, true);
    // this.options = fb.group({
    //   color: this.colorControl,
    //   fontSize: this.fontSizeControl,
    // });
  }

  ngOnInit(): void {
    this.doSearch();
    this.initForm();
  }


  initForm(): any{
    return this.searchForm = this.formbuilder.group({
      search: ['', Validators.required],
    });
  }

  get search1(): string {
    return this.searchForm?.controls.search.value;
  }

  set searchTerm(_searchTerm: string) {
    this.searchForm?.controls.searchTerm.setValue(_searchTerm);
  }

  doSearch(): any { 
    for(let i = 1; i <= 2; i++){
      this.service.get_('')
      .subscribe((data: any) => {
        this.allUsers.push(data.results[0])
      })
    }
  }

//   this.country = new FormGroup({
//     firstName: new FormControl()
//  }); 

  onSelectionChange(event: any): any {
    console.log(event.target)
    // this.status = event.target.value || "all";
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
  
  getFontSize() {
    return Math.max(10, this.fontSizeControl.value); 
  }


}
