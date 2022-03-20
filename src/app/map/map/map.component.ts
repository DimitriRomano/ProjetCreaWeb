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


  constructor(private mapService: MapService) { }
  
  ngOnInit(): void {
    this.mapService.buildMap()
    .then((data) => {
      console.log('tout va bien map');
    })
    .catch((err) => {
    console.log('error',err);
    })

  }
} 
