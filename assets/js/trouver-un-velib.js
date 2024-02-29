document.addEventListener('DOMContentLoaded', function () {


        const apikey="?&key=MjE0ZDNmMGEtNGFkZS00M2FlLWFmMWItZGNhOTZhMWQyYzM2"
        const http="https://api.omega.fifteen.eu/gbfs/2.2/marseille/en/"



    
        //_____________________________________________________________________________________________________

        var map = L.map('map').setView([43.300000, 5.400000], 13);   //Marseille

        // Crée une carte. ne pas réutiliser ou le script ce !!!BLOC!!!
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributeurs'
        }).addTo(map);

        //________________________________________________________________________________________________________



        
        
    
    
        async function fetchvelo() {
            const availableresponse = await fetch(`${http}station_status.json${apikey}`)
            const availabledata = await availableresponse.json()
    
            const inforesponse = await fetch(`${http}station_information.json${apikey}`)
            const infondata = await inforesponse.json()
    
    
            //______________________________________
            console.log(availabledata);
            console.log(infondata);
    
            console.log(availabledata.data.stations);
            console.log(infondata.data.stations);
            //________________________________________
    


            infondata.data.stations.forEach(element => {
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