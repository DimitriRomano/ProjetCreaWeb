import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import { ProfileModule } from './profile/profile.module';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, FontAwesomeModule,ProfileModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
