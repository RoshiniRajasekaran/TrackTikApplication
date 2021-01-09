import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import{ClientSites} from './Model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  

  constructor(private http:HttpClient) {}

  getdata(): Observable<ClientSites []>{

    const url="https://tracktik-challenge.staffr.com/sites"

    return this.http.get<ClientSites []>(url)
    
  }
}
