
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoiay1oYXRzdXNoaSIsImEiOiJjam81cDRwb2kwOXI5M3BvMThqbDhlc296In0.sQrhOg__USZZssAGq9jMqg' //ここにaccess tokenを挿入
}).addTo(mymap);

var markers = L.markerClusterGroup();
for (var i = 0; i < 30; i++) {
    var marker = L.marker([51.5 + (Math.random() / 10), -0.09 + (Math.random() / 10)]);
    marker.bindPopup("<b>Hello</b>");
    markers.addLayer(marker);
}
mymap.addLayer(markers);