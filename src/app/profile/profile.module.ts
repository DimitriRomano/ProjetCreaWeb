import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge/badge.component';
import { PrizeComponent } from './prize/prize.component';

@NgModule({
  declarations: [BadgeComponent, PrizeComponent],
  imports: [CommonModule],
  exports: [BadgeComponent, PrizeComponent],
})
export class ProfileModule {}
