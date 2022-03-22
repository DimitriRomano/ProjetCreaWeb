import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConnectionChoicesComponent} from "./pages/connection-choices/connection-choices.component";
import {LoginComponent} from "./pages/login/login.component";
import { AboutComponent } from './templates/about/about.component';
import { HomeComponent } from './templates/home/home.component';


const routes: Routes = [
  {path : 'templates/home,', component: HomeComponent},
  { path: 'templates/about', component: AboutComponent},
  {path: 'profile', component: ConnectionChoicesComponent},
  {path: 'login/user', component: LoginComponent, data: {image: 'IMAGES-02.png'}},
  {path: 'login/professional', component: LoginComponent, data: {image: 'IMAGES-01.png'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
