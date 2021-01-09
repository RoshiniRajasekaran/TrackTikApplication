import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-site-list-details',
  templateUrl: './site-list-details.component.html',
  styleUrls: ['./site-list-details.component.css']
})
export class SiteListDetailsComponent implements OnInit {

  @Input() siteDetails :any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  ShowMainContacts(){
    const navigationExtras : NavigationExtras = {
      state : {
        data: this.siteDetails
      }
    }
    this.router.navigate(['/site-details'],navigationExtras)
   // this.requestdetails.emit(this.Details);
  }
}
