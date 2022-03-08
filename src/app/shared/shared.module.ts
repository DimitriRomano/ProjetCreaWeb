import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [ButtonComponent, NavbarComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, NavbarComponent],
})
export class SharedModule {}
