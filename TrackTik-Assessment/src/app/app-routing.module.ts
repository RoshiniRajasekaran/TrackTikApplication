import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteListComponent } from './component/site-list/site-list.component';
import{ SiteDetailsComponent} from './component/site-details/site-details.component';

const routes: Routes = [
  { path: '', component:SiteListComponent },
  { path: 'site-details', component:SiteDetailsComponent },

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
