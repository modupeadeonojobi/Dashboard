import { Router } from '@angular/router';
import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  moreDetais: any;

  constructor(private SharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.moreDetais = this.SharedService.itemCollected;

    if (Object.keys(this.moreDetais).length === 0) {
      this.router.navigate(['/home'])
    } else {
      this.moreDetais = this.SharedService.itemCollected;
    }
  }

}
