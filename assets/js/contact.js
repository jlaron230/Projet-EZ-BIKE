const form = document.getElementById('form-style');
let lastName = document.getElementById('name');
let firstName = document.getElementById('firstName');
let phone = document.getElementById('phoneNumber');
let email = document.getElementById('email');
let msg = document.getElementById('message');

// ANCHOR Vérification de la validité du formulaire
function valideForm() {
    let elements = [firstName, lastName, phone, email, msg];
    const invalides = elements.filter(element => element.value === null || element.value === undefined || element.value === "");

    if (invalides.length > 0) {
        alert(`Veuillez renseigner tous les champs nécessaires.`);
        return;
    }

    const validations = [
        { field: firstName, regex: /^[a-zA-Z]{2,20}$/, message: "Le prénom doit contenir entre 2 et 20 caractères alphabétiques." },
        { field: lastName, regex: /^[a-zA-Z]{2,20}$/, message: "Le nom doit contenir entre 2 et 20 caractères alphabétiques." },
        { field: email, regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Veuillez entrer une adresse e-mail valide." },
        { field: phone, regex: /^\d{10}$/, message: "Veuillez entrer un numéro de téléphone valide (10 chiffres)." },
    ];

    const erreurs = validations.filter(validation => !validation.regex.test(validation.field.value));

    if (erreurs.length > 0) {
        alert(erreurs[0].message);
        return;
    }

    alert("Le formulaire est valide.");
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    valideForm();
});
