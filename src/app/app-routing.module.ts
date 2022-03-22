import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConnectionChoicesComponent} from './pages/connection-choices/connection-choices.component';
import {LoginComponent} from './pages/login/login.component';
import {PageComponent as ProfilePage} from './profile/page/page.component';
import {HomeComponent} from "./templates/home/home.component";
import {AboutComponent} from "./templates/about/about.component";
import {ServiceHomeComponent} from "./pages/service-home/service-home.component";
import {MapComponent} from "./map/map/map.component";
import {ServicePartnerComponent} from "./pages/service-partner/service-partner.component";
import {ServiceApplicationComponent} from "./pages/service-application/service-application.component";


const routes: Routes = [


  {path: 'templates/about', component: AboutComponent},
  {path: 'templates/service', component: ServiceHomeComponent},
  {path: 'templates/partners', component: ServicePartnerComponent},
  {path: 'templates/application', component: ServiceApplicationComponent},
  {path: 'templates/home', component: HomeComponent},


  {path: 'map', component: MapComponent},

  {path: 'profile', component: ConnectionChoicesComponent},
  {
    path: 'login/user',
    component: LoginComponent,
    data: {image: 'IMAGES-02.png', type: 'user'},
  },
  {
    path: 'login/professional',
    component: LoginComponent,
    data: {image: 'IMAGES-01.png', type: 'pro'},
  },
  {
    path: 'profile/:type/:id',
    component: ProfilePage,
  },

  {
    path: '',
    redirectTo: 'templates/home',
    pathMatch: 'full'
  },


  {
    path: '**',
    redirectTo: 'templates/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
