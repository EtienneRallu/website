import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: '', redirectTo: 'bio', pathMatch: 'full', data: {animation: 'HOME'} }, 
  { path: 'bio', component: MainComponent, data: {animation: 'HOME'}},
  { path: 'contact', component: ContactComponent, data: {animation: 'CONTACT'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
