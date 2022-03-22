import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ConnectionChoicesComponent} from './pages/connection-choices/connection-choices.component';
import {LoginComponent} from './pages/login/login.component';
import {ServiceHomeComponent} from './pages/service-home/service-home.component';
import {ServicePartnerComponent} from './pages/service-partner/service-partner.component';
import {ServiceApplicationComponent} from './pages/service-application/service-application.component';
import {HomeComponent} from './templates/home/home.component';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MapModule} from './map/map.module';
import {HttpClientModule} from '@angular/common/http';
import {ProfileModule} from './profile/profile.module';
import {AboutComponent} from './templates/about/about.component';


@NgModule({
  declarations: [AppComponent, ConnectionChoicesComponent, LoginComponent, ServiceHomeComponent, ServicePartnerComponent, ServiceApplicationComponent, HomeComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, MapModule, SharedModule, ProfileModule, FontAwesomeModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
