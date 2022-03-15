import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MapService } from '../map.service';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  //data
  source: any;
  markers: any;

  constructor(private mapS: MapService) { }
  
  ngOnInit(): void {
    this.mapS.buildMap();
    this.mapS.creatMarker(43.61046618152723,1.4319085156059725);

  }

}
