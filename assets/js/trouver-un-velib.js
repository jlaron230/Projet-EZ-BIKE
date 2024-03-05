document.addEventListener('DOMContentLoaded', function () {

    const apikey = "?&key=MjE0ZDNmMGEtNGFkZS00M2FlLWFmMWItZGNhOTZhMWQyYzM2";
    const http = "https://api.omega.fifteen.eu/gbfs/2.2/marseille/en/";
    let search = document.querySelector('.search');
    let btn = document.querySelector(".top");

    btn.addEventListener("click", function (e) {
        btn = document.querySelector(".top");
    })

    var LeafIcon = L.Icon.extend({
        options: {
            shadowUrl: "image/leaf-shadow.png",
            iconSize: [30, 50],
            shadowSize: [50, 64],
            iconAnchor: [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor: [-3, -76]
        }
    });

    var greenIcon = new LeafIcon({ iconUrl: 'image/leaf-green.png' }),
        orangeIcon = new LeafIcon({ iconUrl: 'image/leaf-orange.png' }),
        redIcon = new LeafIcon({ iconUrl: 'image/leaf-red.png' });

    var map = L.map('map').setView([43.300000, 5.400000], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    function affichepoint(lat, lon, stationId, availableData) {
        let num = availableData.data.stations.find(station => station.station_id === stationId).num_bikes_available;
        if (num === 0) {
            return L.marker([lat, lon], { icon: redIcon, stationId: stationId }).addTo(map);
        } else if (num < 3) {
            return L.marker([lat, lon], { icon: orangeIcon, stationId: stationId }).addTo(map);
        } else {
            return L.marker([lat, lon], { icon: greenIcon, stationId: stationId }).addTo(map);
        }
    }

    function popup(marker, stationInfo, availableData) {
        const stationId = marker.options.stationId;
        const station = stationInfo.find(station => station.station_id === stationId);
        const availableInfo = availableData.data.stations.find(station => station.station_id === stationId);

        if (station && availableInfo) {
            marker.bindPopup(`<b>${station.name}</b><br>${availableInfo.num_bikes_available} vélo disponible`).openPopup();
        }
    }

    async function fetchVelo() {
        console.log("Chargement en cours...");
        const availableresponse = await fetch(`${http}station_status.json${apikey}`);
        const availabledata = await availableresponse.json();

        const inforesponse = await fetch(`${http}station_information.json${apikey}`);
        const infodata = await inforesponse.json();

        console.log(availabledata);
        console.log("info", infodata);

        console.log(availabledata.data.stations);
        console.log(infodata.data.stations);

        infodata.data.stations.forEach((station, i) => {
            let marker = affichepoint(station.lat, station.lon, station.station_id, availabledata);
            popup(marker, infodata.data.stations, availabledata);
        });

        search.addEventListener("input", function (e) {
            let saisie = search.children[0].value.toLowerCase();
            let filter = infodata.data.stations.filter(station => station.name.toLowerCase().includes(saisie));
            console.log(filter);

            map.eachLayer(layer => {
                if (layer instanceof L.Marker) {
                    map.removeLayer(layer);
                }
            });

            filter.forEach(station => {
                const marker = affichepoint(station.lat, station.lon, station.station_id, availabledata);
                popup(marker, infodata.data.stations, availabledata);
            });
        });

        console.log("Chargement terminé.");
    }

    fetchVelo();
});
