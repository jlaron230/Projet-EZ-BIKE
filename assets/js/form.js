// ANCHOR - AFFICHE LE MSG SI LES CHAMPS SONT VALIDE 

let btnCalcul = document.getElementById("calculate");
let resultText = document.getElementById("result-text");

btnCalcul.addEventListener("click", function(e){
    e.preventDefault();
    openForm();

    let distance = document.querySelector(".distance");
    let distanceValue = distance.value;
    let days = document.querySelector(".days-worked");
    let daysValue = days.value;

    function calcul() {
        let result = (parseFloat((((daysValue * distanceValue) * 0.2) * 52) / 12)).toFixed(2) ;
        console.log(result);
        let text = `Les emissions de CO2 pour les trajets domicile / travail en voiture sont de ${result} kg par mois.`;
        resultText.innerHTML = text;
    }

    let allNumber = /^[0-9]+$/;
    if (distanceValue.match(allNumber)) {
        calcul();
    } else {
        dispalyAlert();
    }
});

function openForm() {
    document.getElementById("form-popup").style.display = "block";
};

function closeForm() {
    document.getElementById("form-popup").style.display = "none";
};


// ANCHOR - Reset 

let bntClose = document.querySelector(".close");

bntClose.addEventListener("click", function(e){
    e.preventDefault();
    closeForm();
    document.querySelector("form").reset();
})


// ANCHOR - MESSAGE SI LE CHAMP ENTRE N'EST PAS VALIDE

let msgAlert = document.getElementById("alert");

function dispalyAlert() {
    let alert = `Veuillez entrez un nombre valide.`;
    msgAlert.innerHTML = alert;
    openAlert();
}

function openAlert() {
    document.getElementById("alert-popup").style.display = "block";
}