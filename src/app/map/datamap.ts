export const geojson: {type:string,features:{type:string,geometry:{type:string,coordinates:[number,number]},properties:{title:string, description:string}}[]} = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-77.032, 38.913] 
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [43.61046618152723, 1.4319085156059725]
        },
        properties: {
          title: 'Mapbox',
          description: 'Toulouse ynov'
        }
      }
    ]
}