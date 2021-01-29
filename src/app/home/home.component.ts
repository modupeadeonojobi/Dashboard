import { ApiService } from './../apiservice.service';
import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users = {};
  options: FormGroup;
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));

  constructor(fb: FormBuilder, private service: ApiService) { 
    this.options = fb.group({
      color: this.colorControl,
      fontSize: this.fontSizeControl,
    });
  }

  ngOnInit(): void {
    for(let i = 1; i <= 2; i++){
      this.service.get_('')
      .subscribe((data: any) => {
        this.users = data.results;
        console.log(this.users)
      
      })
    }
  }

  

// click(): any {
//   this.service.get_('')
//     .subscribe((data: any) => {
//       this.users = data.results;
//       console.log(data)
//     })
// }

  getFontSize() {
    return Math.max(10, this.fontSizeControl.value);
    
  }

}
