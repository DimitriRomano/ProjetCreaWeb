import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionChoicesComponent } from './pages/connection-choices/connection-choices.component';
import { LoginComponent } from './pages/login/login.component';
import { PageComponent as ProfilePage } from './profile/page/page.component';


const routes: Routes = [
  {path : 'templates/home,', component: HomeComponent},
  { path: 'templates/about', component: AboutComponent},
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
