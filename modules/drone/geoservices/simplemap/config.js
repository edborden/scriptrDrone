/**
 * Configuration of the simplemap component
 */ 

var config = {
  
  // Your scriptr.io endpoint
  url: "wss://edborden.scriptrapps.io/", // do not forget the final "/" 
  
  // Token of your scriptr.io account
  token: "RDU0OTQ3RDJDNQ==",
  
  // Google map configuration
  map: {
    
    lat: 40.674116, // sample, replace with your own
    lng: -74.005976, // sample, replace with your own
    zoom: 15, // sample, replace with your own
    key: "AIzaSyBcPYghFh_BXz4dDz-TXTHbU2iV3Wbf57I", // sample, replace with your own key
    output: "terrain", // sample
    channel: "map", // The scriptr.io channel to subscribe the map to (it will receive data from that channel)
    callback: "" // you can specify your own callback function here (callback to be defined in datahandler.js)
  }  
};
