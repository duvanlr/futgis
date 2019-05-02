var mymap = L.map('mapid').setView([3.4010648 , -76.5363028], 12);

var map1= L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
  {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(mymap);

Streets: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		{
			maxZoom: 15,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(mymap);

    var control = L.Routing.control({
      waypoints: [
        L.latLng(3.376237, -76.542013),
        L.latLng(3.375097, -76.537128)
        ]
      }).addTo(mymap);
