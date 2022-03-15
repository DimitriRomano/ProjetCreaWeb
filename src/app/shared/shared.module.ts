import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CardTextComponent } from './card/card-text/card-text.component';
import { CardImageComponent } from './card/card-image/card-image.component';

@NgModule({
  declarations: [
    ButtonComponent,
    NavbarComponent,
    FooterComponent,
    CardTextComponent,
    CardImageComponent,
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    NavbarComponent,
    CardTextComponent,
    CardImageComponent,
  ],
})
export class SharedModule {}
