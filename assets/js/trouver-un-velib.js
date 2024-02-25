document.addEventListener('DOMContentLoaded', function () {
  
    var map = L.map('map').setView([51.505, -0.09], 13);

   
    var OpenStreetMap_Mapnik = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributeurs'
    }).addTo(map);
});
