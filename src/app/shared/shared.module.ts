import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button/button.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [ButtonComponent, NavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [ButtonComponent, NavbarComponent],
})
export class SharedModule {
}
