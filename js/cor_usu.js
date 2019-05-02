//crear botones;
var coordenadas;
L.easyButton('<img src="lib/images/Un dedo Filled-50.png" width=16 >', function(btn, map)
{
click_origen();
}).addTo( mymap );

//crea la funcion de click en el mapa
function click_origen(){
  alert('Haga un Click sobre el mapa su ubicacion');
  mymap.once('click', function(e) {
    var coord= e.latlng;
    var lng = coord.lng.toFixed(6);
    var lat = coord.lat.toFixed(6);
    var origen = L.marker([lat , lng]).addTo(mymap);
    origen.bindPopup("<b>USUARIO</b>").openPopup();

    //document.getElementById("cor_origen").value=lng+' '+lat;
    $('#cor_origen').val(lng+' '+lat);
  });
}
