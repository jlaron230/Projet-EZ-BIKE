

function dayS (){
    let Jours = document.getElementById("D")
let heure = document.getElementById("H")
let minute = document.getElementById("M")
let seconde = document.getElementById("S")
let rebours = document.getElementById("rebours")
const myArray = ["a","b","c", "d","e","f"]
const [val1,val2,...rest] = myArray //destructuring rest

  let maintenant = new Date()
  let day = new Date('September 1, 2024 23:59:59');

let totals = (day - maintenant) / 1000
console.log(totals)

if (totals > 0){
    // nos traitements
   let NbrJours = Math.floor(totals / (60 * 60 * 24))
   let NbrHeures = Math.floor((totals - (NbrJours * 60 * 60 * 24)) / (60 * 60))
   let NbrMinutes = Math.floor((totals - ((NbrJours * 60 * 60 * 24 + NbrHeures * 60 * 60))) / 60);
   let NbrSecondes = Math.floor((totals - ((NbrJours * 60 * 60 * 24 + NbrHeures * 60 * 60) + NbrMinutes * 60)));
    Jours.textContent = gener(NbrJours)
    heure.textContent = gener(NbrHeures)
    minute.textContent = gener(NbrMinutes)
    seconde.textContent = gener(NbrSecondes)

    let minuteur = setTimeout("dayS()", 1000);
}
}
dayS()

function gener (nb){
    return (nb < 10) ? "0" + nb : nb
}
