var markers = {};

/**
 * This is the default callback invoked whenever a msg is pushed to the pubsub channel of the map
 * All callbacks expect an stringified array of objects that contains at least the following properties id, lat, lng
 * Note that upon subscription to the channel, the callback should not expect an array but a stringified subscription status
 * @function defaultCallback
 * @param {Object} [obj]
 * @param {String} [obj.id]: identifier of an asset to represent on the map
 * @param {Number} [obj.lat]: latitude of the asset
 * @param {Number} [obj.lng]: longitude of the asset
 * @param {String} [obj.type]: type of asset, optional. Help determining what icon to use.
 * @param {Object} [map]: google map object
 */
function defaultCallback(obj) {

  var data = JSON.parse(obj);
  console.log(data);
  if (data.lat) {
    var marker = new google.maps.Marker({

      position: {lat:data.lat, lng: data.lng},
      map: map,
      icon: getIcon(data.type),
      title: "id:" +  data.id
    });

    //markers[data.id] = data;

    var latlng = new google.maps.LatLng(data.lat, data.lng);
    // update heat map
    console.log('latlng',latlng);
    var points = heatmap.get('data');
    console.log('points',points);
    points.push({location: latlng, weight: data.intensity});
    console.log('afterpointspush');
    // Center on coordinate
    //map.panTo(latlng);
    console.log('aftermappan');
    // Update polyfill path
    //var path = flightPath.getPath();
    //console.log('path',path);
    //path.push(latlng);
    // Update marker
    console.log('beforemarkersetposition',latlng)
    marker.setPosition(latlng);
    //document.getElementById('headsup-text').innerHTML = "Point: " + data.point + "&nbsp&nbsp&nbspLat: " + data.lat.toFixed(6) + "&nbsp&nbsp&nbspLon: " +  data.lon.toFixed(6) + "&nbsp&nbsp&nbspAlt: " +
    //data.altitude.toFixed(3) + "&nbsp&nbsp&nbspIntensity: " + data.intensity.toFixed(6)
    
  }

}

function getIcon(type) {
  
  if (type) {
    return config[type].icon;
  }
  
  return "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
}