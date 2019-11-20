import { BrowserModule, Title} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { HomeComponent } from './home/home.component';
import { FilmComponent } from './film/film.component';
import { MusicComponent } from './music/music.component';
import { WebComponent } from './web/web.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    NavbarComponent,
    ContactComponent,
    HomeComponent,
    FilmComponent,
    MusicComponent,
    WebComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgxPageScrollCoreModule.forRoot({duration: 250})
  ],
  providers: [ Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
