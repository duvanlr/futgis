//crear el mapa con coordenadas y zoom
var mymap = L.map('mapid').setView([ 3.374800, -76.533800 ], 12);

//cargar los shapes de openlayer
var wmsLayer1 = L.tileLayer.wms('http://localhost:8080/geoserver/wms?', {
layers: 'Proyecto_sig:cali',
attribution: 'predios',
format: 'image/png',
transparent: true
});

var wmsLayer3 = L.tileLayer.wms('http://localhost:8080/geoserver/wms?', {
layers: 'Proyecto_sig:mallavial',
attribution: 'vias_cali',
format: 'image/png',
transparent: true
});


var wmsLayer2 = L.tileLayer.wms('http://localhost:8080/geoserver/wms?', {
layers: 'Proyecto_sig:parq',
attribution: 'parqueaderos',
format: 'image/png',
transparent: true
});

var donde = new L.geoJson( datas,
{ onEachFeature: geojsonLayer
});


//cargar capas de las librerias
var BING_KEY = 'AnGTIGPxT0GQytJDSeb5NMz5oaL8Et-U6hvGQ9NePYUBFsRoht3GdK2s26vtWI2y'

var basemaps =
 {
 Grayscale: L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
 {
 maxZoom: 18,
 attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
 }),

 Streets: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
 {
 maxZoom: 19,
 attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
 }),

 bingLayer:  L.tileLayer.bing(BING_KEY),

 };


 var datas=[];
 var iconsStyle = L.AwesomeMarkers.icon({
 markerColor: '#f28f82'
 });

 function geojsonLayer (feature, layer) {
       layer.bindPopup("<b>ID Parqueadero:</b> "+ feature.properties.id_parq +
                   "<br><b>Nombre Parqueadero:</b> "+ feature.properties.nombre +
                   "<br><b>Direccion: </b>" + feature.properties.direccion);

       layer.setIcon(iconsStyle);
   };



//cargar cada capa al mapid
basemaps.Grayscale.addTo(mymap);
basemaps.Streets.addTo(mymap);
wmsLayer2.addTo(mymap);


var groupedOverlays = {
  "predios cali": {
    "predios": wmsLayer1
  },
  "Vias Cali": {
      "Vias": wmsLayer3
  },
  "Parqueaderos": {
      "Parqueaderos": wmsLayer2
},

};


L.control.groupedLayers(basemaps, groupedOverlays).addTo(mymap);
