//crear botones;
L.easyButton('<img src="lib/images/Un dedo Filled-50.png" width=16 >', function(btn, map)
{
click_origen();
}).addTo( mymap );

//crea la funcion de click en el mapa
    function click_origen(){
                alert('Haga un Click sobre el mapa del Origen de su ubicacion');
                  mymap.once('click', function(e) {
                  var coord= e.latlng;
                  var lng = coord.lng.toFixed(6);
                  var lat = coord.lat.toFixed(6);
                  var origen = L.marker([lat , lng]).addTo(mymap);
                  origen.bindPopup("<b>Punto origen</b>").openPopup();

//document.getElementById("cor_origen").value=lng+' '+lat;
$('#cor_origen').val(lng+' '+lat);
});
                }
//crear botones
L.easyButton('<img src="lib/images/Un dedo-50.png" width=16 >', function(btn, map)
{
click_destino();
}).addTo( mymap );

    function click_destino(){
                alert('Haga un Click sobre el mapa del destino');
                mymap.once('click', function(e) {
                var coord= e.latlng;
                var lng = coord.lng.toFixed(6);
                var lat = coord.lat.toFixed(6);
                var destino = L.marker([lat , lng]).addTo(mymap);
                destino.bindPopup("<b>Punto origen</b>").openPopup();

                //document.getElementById("cor_origen").value=lng+' '+lat;
                $('#cor_destino').val(lng+' '+lat);
                });
                                }

L.easyButton('<img src="lib/img/Joyent Filled-50.png" width=16 >', function(btn, map)
{
  click_origen();
  }).addTo( mymap );
