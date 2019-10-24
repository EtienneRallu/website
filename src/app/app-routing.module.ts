import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { FilmComponent } from './film/film.component';
import { MusicComponent } from './music/music.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'HOME'}},
  { path: 'bio', component: MainComponent, data: { animation: 'BIO' } },
  { path: 'film', component: FilmComponent, data: {animation: 'FILM'}},
  { path: 'music', component: MusicComponent, data: {animation: 'MUSIC'} },
  { path: 'contact', component: ContactComponent, data: {animation: 'CONTACT'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
