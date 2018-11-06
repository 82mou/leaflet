var mymap1 = L.map('map1').setView([35.706589, 139.782328], 17);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets'
}).addTo(mymap1);

var markers1 = L.markerClusterGroup();
for (var i = 0; i < 30; i++) {
    var marker1 = L.marker([35.706589 + (Math.random() / 10), 139.782328 + (Math.random() / 10)]);
    marker1.bindPopup("<b>Hello</b>");
    markers1.addLayer(marker1);
}
mymap1.addLayer(markers1);


var mymap2 = L.map('map2').setView([35.706589, 139.782328], 17);

L.tileLayer('http://tile.openstreetmap.jp/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets'
}).addTo(mymap2);

var markers2 = L.markerClusterGroup();
for (var i = 0; i < 30; i++) {
    var marker2 = L.marker([35.706589 + (Math.random() / 10), 139.782328 + (Math.random() / 10)]);
    marker2.bindPopup("<b>Hello</b>");
    markers2.addLayer(marker2);
}
mymap2.addLayer(markers2);


var mymap3 = L.map('map3').setView([35.706589, 139.782328], 17);

L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets'
}).addTo(mymap3);

var markers3 = L.markerClusterGroup();
for (var i = 0; i < 30; i++) {
    var marker3 = L.marker([35.706589 + (Math.random() / 10), 139.782328 + (Math.random() / 10)]);
    marker3.bindPopup("<b>Hello</b>");
    markers3.addLayer(marker3);
}
mymap3.addLayer(markers3);


// var mymap4 = L.map('map4').setView([35.706589, 139.782328], 17);
//
// L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets'
// }).addTo(mymap4);
//
// var markers4 = L.markerClusterGroup();
// for (var i = 0; i < 30; i++) {
//     var marker4 = L.marker([51.5 + (Math.random() / 10), -0.09 + (Math.random() / 10)]);
//     marker4.bindPopup("<b>Hello</b>");
//     markers4.addLayer(marker4);
// }
// mymap1.addLayer(markers4);
//
//
// var mymap5 = L.map('map5').setView([35.706589, 139.782328], 17);
//
// L.tileLayer('http://www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', {
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets'
// }).addTo(mymap5);
//
// var markers5 = L.markerClusterGroup();
// for (var i = 0; i < 30; i++) {
//     var marker5 = L.marker([51.5 + (Math.random() / 10), -0.09 + (Math.random() / 10)]);
//     marker5.bindPopup("<b>Hello</b>");
//     markers5.addLayer(marker5);
// }
// mymap5.addLayer(markers5);
//
//
// var mymap6 = L.map('map6').setView([35.706589, 139.782328], 17);
//
// L.tileLayer('http://toolserver.org/tiles/hikebike/{z}/{x}/{y}.png', {
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets'
// }).addTo(mymap6);
//
// var markers6 = L.markerClusterGroup();
// for (var i = 0; i < 30; i++) {
//     var marker6 = L.marker([51.5 + (Math.random() / 10), -0.09 + (Math.random() / 10)]);
//     marker6.bindPopup("<b>Hello</b>");
//     markers6.addLayer(marker6);
// }
// mymap6.addLayer(markers6);