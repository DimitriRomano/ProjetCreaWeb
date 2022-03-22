import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapDotComponent } from './map-dot/map-dot.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [MapDotComponent, MapComponent],
  imports: [CommonModule],
  exports: [MapDotComponent,MapComponent],
})
export class MapModule {}
