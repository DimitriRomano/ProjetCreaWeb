import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { MapModule } from './map/map.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileModule } from './profile/profile.module';
import { AboutComponent } from './templates/about/about.component';
import { HomeComponent } from './templates/home/home.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, MapModule, SharedModule, ProfileModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
