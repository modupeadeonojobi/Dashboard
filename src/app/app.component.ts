import { SharedService } from './shared.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
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
  local: any;


  constructor(private sharedService: SharedService, private FormBuilder: FormBuilder, private router: Router) {
    this.searchForm = this.FormBuilder.group({
      searchItem: ['', Validators.required]
    });

    this.local = sessionStorage.getItem('setValue');

  }

  ngOnInit(): void {
    this.local.toString();
    this.local = JSON.parse(this.local)

    if (this.local == "male") {
      this.router.navigate(['/male']);
    } else if (this.local == "female") {
      this.router.navigate(['/female']);
    } else if (this.local == "allUsers") {
      this.router.navigate(['/home']);
    }

    this.onSubmit();

  }

  onSubmit(): any {
    if (this.searchForm.valid) {
      const appsearchItem = this.searchForm.controls.searchItem.value;
      sessionStorage.setItem('searchTerm', JSON.stringify(appsearchItem));
      this.searchForm.reset();
      this.sharedService.sendMessage(appsearchItem);

      return
    }
  }

  allUser(): any {
    sessionStorage.setItem('setValue', JSON.stringify('allUsers'));
    this.router.navigate(['/home'])
  }

  female(): any {
    let genderF = "female";
    this.sharedService.sendMessage(genderF);
    sessionStorage.setItem('setValue', JSON.stringify(genderF))
    this.router.navigate(["/female"]);
  }

  male(): any {
    let genderM = "male";
    this.sharedService.sendMessage(genderM)
    sessionStorage.setItem('setValue', JSON.stringify(genderM))
    this.router.navigate(["/male"]);
  }

  next(): any {
    //    this.router.navigateByUrl('/home');
  }


}
