import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { MapModule } from './map/map.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileModule } from './profile/profile.module';
import { ConnectionChoicesComponent } from './pages/connection-choices/connection-choices.component';
import { LoginComponent } from './pages/login/login.component';
import { ServiceHomeComponent } from './pages/service-home/service-home.component';

@NgModule({
  declarations: [AppComponent, ConnectionChoicesComponent, LoginComponent, ServiceHomeComponent],
  imports:[BrowserModule ,AppRoutingModule, MapModule, SharedModule, ProfileModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
