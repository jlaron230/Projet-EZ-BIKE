document.addEventListener('DOMContentLoaded', function () {

    
  function affichepoint (lat, lon) {



      var map = L.map('map').setView([51.505, -0.09], 13);
  
     
      var OpenStreetMap_Mapnik = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributeurs'
      }).addTo(map);
      map.setView([43.300000, 5.400000], 13);
      var marker = L.marker([lat, lon]).addTo(map);
  };





async function fecthvelo() {

        const veloresponse= await fetch("https://api.omega.fifteen.eu/gbfs/2.2/marseille/en/station_status.json?&key=MjE0ZDNmMGEtNGFkZS00M2FlLWFmMWItZGNhOTZhMWQyYzM2")
        const velodata=await veloresponse.json()
    
        const station= await fetch("https://api.omega.fifteen.eu/gbfs/2.2/marseille/en/station_information.json?&key=MjE0ZDNmMGEtNGFkZS00M2FlLWFmMWItZGNhOTZhMWQyYzM2")
        const stationdata=await station.json()
    

        console.log(velodata.data.stations);
        console.log(stationdata.data);
        stationdata.data.stations.forEach(element => {
            let latitude = element.lat;
            let longitude = element.lat;
            affichepoint (latitude, longitude)
            console.log(typeof(latitude, longitude));
            
            marker = new L.marker([latitude, longitude])
            .bindPopup(latitude)
            .addTo(map);
            
        });
}
fecthvelo()
})
  







// displayArea.innerHTML = `
// <h2>${stationdata[0].station_id}</h2>
// <img src="${pokeapiData.sprites.front_default}" alt="Image de ${tyradexData.name.fr}">
// `



// _______________________________________________________________________________


// async function fetchPokemon() { 
//     const pokemonNameFR = document.getElementById("pokemonName").value.toLowerCase(); 
//     const displayArea = document.getElementById("pokemonDisplay");
//     const tyradexResponse = await fetch(`https://tyradex.vercel.app/api/v1/pokemon/${pokemonNameFR}`);
//     const tyradexData = await tyradexResponse.json();
//     const pokeapiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${tyradexData.name.en.toLowerCase()}`);
//     const pokeapiData = await pokeapiResponse.json();
    
//     console.log(pokeapiData);
    
//     displayArea.innerHTML = `
//         <h2>${tyradexData.name.fr}</h2>
//         <img src="${pokeapiData.sprites.front_default}" alt="Image de ${tyradexData.name.fr}">
//     `
    
//     audio = new Audio(pokeapiData.cries.latest);
//     audio.play();
    
//     displayArea.addEventListener("click", function() {
//         audio.play();
//     })
    
//     }