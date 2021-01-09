import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import{ClientService} from '../../client.service';
import{ClientSites} from '../../Model/Client';
import { Router } from '@angular/router';


@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css']
})
export class SiteListComponent implements OnInit {
  data:ClientSites[];
  Details:boolean=false;
  constructor(private clients:ClientService) { 
  }
  ngOnInit(): void {
    
    this.clients.getdata().subscribe((ClientSites)=>{
      this.data=ClientSites
      console.log(this.data[0]);
    })
  }

  
 

}



