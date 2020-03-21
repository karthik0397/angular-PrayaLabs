import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';

const routes:Routes=[{ path: 'Home', component: HomeComponent },
{ path: 'About', component: AboutComponent },
{ path: 'Services', component: ServicesComponent },
{ path: 'Careers', component: CareersComponent },
{ path: 'contact', component: ContactComponent },
{ path: '', redirectTo: '/Home', pathMatch: 'full' }];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}

