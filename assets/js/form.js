let btnCalcul = document.getElementById("calculate");

btnCalcul.addEventListener("click", function(e){
    e.preventDefault();
    console.log("click");
    openForm();
});

function openForm() {
    document.getElementsByClassName("form-popup").style.display = "block";
};



let bntClose = document.getElementById("close");

bntClose.addEventListener("click", function(e){
    console.log("click");
    closeForm();
})

function closeForm() {
    document.getElementsByClassName("form-popup").style.display = "none";
};