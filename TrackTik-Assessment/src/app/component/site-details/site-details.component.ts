import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.css']
})
export class SiteDetailsComponent implements OnInit  {
 
  siteDetails :any;
  constructor(    private route: ActivatedRoute, private router: Router) {
   const navigation = this.router.getCurrentNavigation();
   if(navigation){
    this.siteDetails = navigation.extras.state.data;
   }
   }


  ngOnInit(): void {
  }
goback(){
  this.router.navigate([''])
}
  
}
