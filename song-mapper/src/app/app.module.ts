import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth.service';
import { StorageService } from './storage.service';
import { MapComponent } from './map/map.component';

import { AgmCoreModule } from '@agm/core';
import { NewMemoryComponent } from './new-memory/new-memory.component';
import { LocationService } from './location.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    ErrorPageComponent,
    MapComponent,
    NewMemoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBYku9lU2axlHPxksk1T5cHdwdKjgLVXlQ',
      libraries: ['places']
    })
  ],
  providers: [
    AuthService,
    StorageService,
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
