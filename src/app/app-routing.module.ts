import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './templates/about/about.component';
import { HomeComponent } from './templates/home/home.component';

const routes: Routes = [
  {path : 'templates/home,', component: HomeComponent},
  { path: 'templates/about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
