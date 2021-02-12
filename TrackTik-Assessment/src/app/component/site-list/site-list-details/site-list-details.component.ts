import { Component, Input, OnInit } from '@angular/core';
import {ClientSites} from 'src/app/Model/model';

@Component({
  selector: 'app-site-list-details',
  templateUrl: './site-list-details.component.html',
  styleUrls: ['./site-list-details.component.css']
})
export class SiteListDetailsComponent implements OnInit {

  @Input() siteDetails :ClientSites;
  constructor() { }

  ngOnInit(): void {
  }
  
  
  
}
