import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapDotComponent } from './map-dot/map-dot.component';

@NgModule({
  declarations: [MapDotComponent],
  imports: [CommonModule],
  exports: [MapDotComponent],
})
export class MapModule {}
