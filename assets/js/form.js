let btnCalcul = document.getElementById("calculate");
let resultText = document.getElementById("result-text");
console.log(resultText);

btnCalcul.addEventListener("click", function(e){
    e.preventDefault();
    console.log("click");
    openForm();
    let distance = document.querySelector(".distance");
    let distanceValue = distance.value;
    console.log(distanceValue);
    let days = document.querySelector(".days-worked");
    let daysValue = days.value;
    console.log(daysValue);
    function calcul() {
        let result = (parseFloat((((daysValue * distanceValue) * 0.2) * 52) / 12)).toFixed(2) ;
        console.log(result);
        let text = `Les emissions de CO2 pour les trajets domicile / travail en voiture sont de ${result} kg par mois.`;
        resultText.innerHTML = text;
    }
    calcul();
});

function openForm() {
    document.getElementById("form-popup").style.display = "block";
};


function calcul() {
    let result = (parseFloat((((daysValue * distanceValue) * 0.2) * 52) / 12)).toFixed(2) ;
    console.log(result);
    let text = `Les emissions de CO2 pour les trajets domicile / travail en voiture sont de ${result} kg par mois.`;
    resultText.innerHTML = text;
}

let bntClose = document.getElementById("close");

bntClose.addEventListener("click", function(e){
    e.preventDefault();
    console.log("click");
    closeForm();
    document.querySelector("form").reset();
})

function closeForm() {
    document.getElementById("form-popup").style.display = "none";
};