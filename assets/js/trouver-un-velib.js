document.addEventListener('DOMContentLoaded', function () {


        const apikey="?&key=MjE0ZDNmMGEtNGFkZS00M2FlLWFmMWItZGNhOTZhMWQyYzM2"
        const http="https://api.omega.fifteen.eu/gbfs/2.2/marseille/en/"



    
        //_____________________________________________________________________________________________________

        var map = L.map('map').setView([43.300000, 5.400000], 13);   //Marseille

        // Crée une carte. ne pas être réutiliser ou le script se !!!BLOC!!!
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributeurs'
        }).addTo(map);

        //________________________________________________________________________________________________________

  

 function affichepoint(lat, lon) {

            return L.marker([lat, lon]).addTo(map);
            

        }

function popup(marker,infodata,i,availabledata) {
    
    marker.bindPopup(`<b>${infodata.data.stations[i].name}</b><br>${availabledata.data.stations[i].
        num_bikes_available} vélo disponible`).openPopup();
}


    

        
    
    
        async function fetchvelo() {
            const availableresponse = await fetch(`${http}station_status.json${apikey}`)
            const availabledata = await availableresponse.json()
    
            const inforesponse = await fetch(`${http}station_information.json${apikey}`)
            const infodata = await inforesponse.json()
    

            console.log(infodata.data.stations[0].name);
    
            //______________________________________
            console.log(availabledata);
            console.log(infodata);
    
            console.log(availabledata.data.stations);
            console.log(infodata.data.stations);
            //________________________________________
    


            infodata.data.stations.forEach((element,i) => {  //param foreach (element, index , tableau parent) => {}
                let latitude = element.lat;
                let longitude = element.lon;
                
    
                let marker=affichepoint(latitude, longitude);  
                popup(marker,infodata,i,availabledata)
            });
        }
      

    


    
        fetchvelo()
    })