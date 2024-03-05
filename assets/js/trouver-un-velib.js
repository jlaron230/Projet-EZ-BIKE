document.addEventListener('DOMContentLoaded', function () {

// la SEULE doc https://leafletjs.com/


        const apikey="?&key=MjE0ZDNmMGEtNGFkZS00M2FlLWFmMWItZGNhOTZhMWQyYzM2"
        const http="https://api.omega.fifteen.eu/gbfs/2.2/marseille/en/"
    
//_________________________________________________________________________________________________________________________________________


        // déclaration des icones
        var LeafIcon = L.Icon.extend({
            options: {

            shadowUrl:"image/leaf-shadow.png",
            iconSize:     [30, 50], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        }
    });

    var greenIcon = new LeafIcon({iconUrl: 'image/leaf-green.png'}),
    orangeIcon = new LeafIcon({iconUrl: 'image/leaf-orange.png'}),
    redIcon = new LeafIcon({iconUrl: 'image/leaf-red.png'})
   

        var map = L.map('map').setView([43.300000, 5.400000], 13);   //Marseille

        // Crée une carte. ne pas être réutiliser ou le script se !!!BLOC!!!
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributeurs'
        }).addTo(map);

//________________________________________________________________________________________________________________________________________

  

 function affichepoint(lat, lon,i,availabledata) {
    let num=availabledata.data.stations[i].num_bikes_available
if (num===0){
    return L.marker([lat, lon],{icon: redIcon}).addTo(map);
}
else if (num<3){
    return L.marker([lat, lon],{icon: orangeIcon}).addTo(map);
 }
 else{
    return L.marker([lat, lon],{icon: greenIcon}).addTo(map);
 }
          }

function popup(marker,infodata,i,availabledata) {marker.bindPopup(`<b>${infodata.data.stations[i].name}</b><br>${availabledata.data.stations[i].num_bikes_available} vélo disponible`).openPopup();}

    
    async function fetchvelo() {
            const availableresponse = await fetch(`${http}station_status.json${apikey}`)
            const availabledata = await availableresponse.json()
    
            const inforesponse = await fetch(`${http}station_information.json${apikey}`)
            const infodata = await inforesponse.json()
    
            //______________________________________
            console.log(availabledata);
            console.log(infodata);
    
            console.log(availabledata.data.stations);
            console.log(infodata.data.stations);
            //________________________________________
    

            infodata.data.stations.forEach((element,i) => {  //param foreach (element, index , tableau parent) => {}
                let latitude = element.lat;
                let longitude = element.lon;
                
    
                let marker=affichepoint(latitude, longitude,i,availabledata);  
                popup(marker,infodata,i,availabledata)
            });
        }
      
    
        fetchvelo()
    })