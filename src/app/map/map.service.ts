import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import mapboxgl from 'mapbox-gl';
import { geojson } from './datamap';
import { HttpClient } from '@angular/common/http';
import { GeoJson } from './i-map';

@Injectable({
  providedIn: 'root'
})

export class MapService {
  
  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 43.61046618152723;
  lng = 1.4319085156059725;
  zoom = 12 ;


  constructor() { 
    mapboxgl.accessToken = environment.mapbox.accessToken;
   }
  //  this.map = new mapboxgl.Map({
  //    container: 'map',
  //    style: this.style,
  //    zoom: this.zoom,
  //    center: [this.lng, this.lat]
  //  })

   buildMap():Promise<any> {
     return new Promise((resolve, reject)=>{
      try {
        this.map = new mapboxgl.Map({
          container: 'map',
          style: this.style,
          zoom: this.zoom,
          center: [this.lng, this.lat]
        });
         this.map.addControl(new mapboxgl.NavigationControl());
        
        

        resolve( {
          map : this.map
        });
      } catch (e) {
        reject(e);
      }
     
    });
  }

  // addMarker(geojson: GeoJson): void {
  //   const marker = new mapboxgl.Marker({
  //     draggable: false
  //   })
  //   .setLngLat(geojson.coordinates)
  //   .addTo(this.map);
  // }

  // addLayer(geojson: GeoJson): void {
  //   this.map.addLayer({
  //     id: geojson.id,
  //     type: 'fill',
  //     source: {
  //       type: 'geojson',
  //       data: {
  //         type: 'Feature',
  //         geometry: {
  //           type: 'Polygon',
  //           coordinates: geojson.coordinates
  //         }
  //       }
  //     },
  //     layout: {},
  //     paint: {
  //       'fill-color': geojson.color,
  //       'fill-opacity': 0.8
  //     }
  //   });
  // }
  
    
}



