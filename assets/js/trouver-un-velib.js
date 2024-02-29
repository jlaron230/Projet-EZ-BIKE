document.addEventListener('DOMContentLoaded', function () {


        const apikey="?&key=MjE0ZDNmMGEtNGFkZS00M2FlLWFmMWItZGNhOTZhMWQyYzM2"
    
        var map = L.map('map').setView([43.300000, 5.400000], 13);
    
    
        var OpenStreetMap_Mapnik = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributeurs'
        }).addTo(map);
    
    
    
        async function fetchvelo() {
            const veloresponse = await fetch(`https://api.omega.fifteen.eu/gbfs/2.2/marseille/en/station_status.json${apikey}`)
            const velodata = await veloresponse.json()
    
            const station = await fetch(`https://api.omega.fifteen.eu/gbfs/2.2/marseille/en/station_information.json${apikey}`)
            const stationdata = await station.json()
    
    
            console.log(velodata);
            console.log(stationdata);
    
            console.log(velodata.data.stations);
            console.log(stationdata.data.stations);
    
            stationdata.data.stations.forEach(element => {
                let latitude = element.lat;
                let longitude = element.lon;
    
                affichepoint(latitude, longitude);
                
            });
        }
    
        
        function affichepoint(lat, lon) {
            L.marker([lat, lon]).addTo(map);
        };
    
    
        fetchvelo()
    })