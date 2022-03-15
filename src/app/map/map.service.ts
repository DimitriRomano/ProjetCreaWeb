import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import mapboxgl from 'mapbox-gl';
import { geojson } from './datamap';

@Injectable({
  providedIn: 'root'
})

export class MapService {
  // geojson = {
  //   type: 'FeatureCollection',
  //   features: [
  //     {
  //       type: 'Feature',
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [-77.032, 38.913]
  //       },
  //       properties: {
  //         title: 'Mapbox',
  //         description: 'Washington, D.C.'
  //       }
  //     },
  //     {
  //       type: 'Feature',
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [-122.414, 37.776]
  //       },
  //       properties: {
  //         title: 'Mapbox',
  //         description: 'San Francisco, California'
  //       }
  //     }
  //   ]
  // };
  
  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 43.61046618152723;
  lng = 1.4319085156059725;
  zoom = 12 ;

  // geojson = {
  //   type: 'FeatureCollection',
  //   features: [
  //     {
  //       type: 'Feature',
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [-77.032,38.913] 
  //       },
  //       properties: {
  //         title: 'Mapbox',
  //         description: 'Washington, D.C.'
  //       }
  //     },
  //     {
  //       type: 'Feature',
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [-122.414,37.776]
  //       },
  //       properties: {
  //         title: 'Mapbox',
  //         description: 'San Francisco, California'
  //       }
  //     }
  //   ]
  // };

  constructor() { 
    mapboxgl.accessToken = environment.mapbox.accessToken;
   }

   buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    })
   this.map.addControl(new mapboxgl.NavigationControl());

    // add markers to map
  // for (const feature of geojson.features) {
  //   // create a HTML element for each feature
  //   const el = document.createElement('div');
  //   el.className = 'marker';

  //   // make a marker for each feature and add to the map
  //   new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(this.map);
  // }
  }

  creatMarker(lng:number, lat:number) {
    const marker = new mapboxgl.Marker({
      draggable:true,
    }).setLngLat([lng,lat])
    .addTo(this.map);
  }

  // testmarker(){
  //   this.geojson.features.forEach(feature => {
  //     const el = document.createElement('div');
  //   el.className = 'marker';

  // // make a marker for each feature and add to the map
  // new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(this.map);
  //   });
   
  // }

  
}
