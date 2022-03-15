import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button/button.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from "@angular/router";
import {FooterComponent} from './footer/footer.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [ButtonComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [ButtonComponent, NavbarComponent, FooterComponent],
})
export class SharedModule {
}
