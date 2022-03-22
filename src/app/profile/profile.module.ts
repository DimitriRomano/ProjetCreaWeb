import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge/badge.component';
import { PrizeComponent } from './prize/prize.component';
import { PageComponent as ProfilePage } from './page/page.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [BadgeComponent, PrizeComponent, ProfilePage],
  imports: [CommonModule, SharedModule, MatSliderModule],
  exports: [ProfilePage],
})
export class ProfileModule {}
