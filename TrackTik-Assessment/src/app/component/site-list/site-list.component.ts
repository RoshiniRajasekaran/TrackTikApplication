import { Component, OnInit,Input} from '@angular/core';
import{ClientService} from '../../service/client.service';
import{ClientSites} from '../../Model/model';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css']
})
export class SiteListComponent implements OnInit {
  data:ClientSites[];
  filterdata:string;
  @Input() siteDetails :ClientSites;

  constructor(private clientservice:ClientService , private router:Router) { 
  }
  ngOnInit(): void {
    
    //calling clientservice to fetch data

    this.clientservice.getSitesdata().subscribe((ClientSites)=>{
      this.data=ClientSites;
      console.log(this.data[0]);
    })
  }
  

  //getting data from route NavigationExtras

  ShowMainContacts(d:ClientSites){
    const navigationExtras : NavigationExtras = {
      state : {
        data: d
      }
    }

    //navigating to site-details page
    this.router.navigate(['/site-details'],navigationExtras)
    console.log(this.siteDetails);
  }
}





