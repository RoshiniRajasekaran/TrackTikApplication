import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from "@angular/router";
import{ClientSites} from 'src/app/Model/model';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.css']
})
export class SiteDetailsComponent implements OnInit  {
 
  siteDetails :ClientSites;
  constructor(    private route: ActivatedRoute, private router: Router) {
   const navigation = this.router.getCurrentNavigation();

   //getting data from route navigation

   if(navigation){
    this.siteDetails = navigation.extras.state.data;
   }
   }


  ngOnInit(): void {
  }

  //back to main page
goback(){
  this.router.navigate([''])
}
  
}
