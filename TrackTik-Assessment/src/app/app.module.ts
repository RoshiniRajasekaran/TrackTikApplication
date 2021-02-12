import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteListComponent } from './component/site-list/site-list.component';
import { SiteDetailsComponent } from './component/site-details/site-details.component';
import{HttpClientModule} from '@angular/common/http';
import { SiteListDetailsComponent } from './component/site-list/site-list-details/site-list-details.component';


import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations: [
    AppComponent,
    SiteListComponent,
    SiteDetailsComponent,
    SiteListDetailsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
