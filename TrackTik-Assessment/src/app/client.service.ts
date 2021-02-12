import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import{ClientSites} from '../Model/model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  

  constructor(private http:HttpClient) {}

  //getting data from sites API

  getSitesdata(): Observable<ClientSites []>{

    const url="https://tracktik-challenge.staffr.com/sites"

    return this.http.get<ClientSites []>(url)
    
  }
}
