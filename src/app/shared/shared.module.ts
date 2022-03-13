import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardSimpleComponent } from './card/card-simple/card-simple.component';

@NgModule({
  declarations: [ButtonComponent, NavbarComponent, CardSimpleComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, NavbarComponent],
})
export class SharedModule {}
