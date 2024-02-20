// Display the header on every page
function displayHeader() {
    console.log('displayHeader')
    const header = document.createElement('header')
    header.innerHTML = `
    <header>
        <nav>
            <div class="navbar-desktop roboto-regular">
                <a href="/index.html" class="nav-brand"><img src="../image/ez-bike_logo.svg" style="width: 150px"></a>
                <a href="/index.html" class="green">Accueil</a>
                <a href="/inventions.html" class="green">Mode d'emploi</a>
                <a href="/about.html" class="green">Trouver un vélib</a>
                <a href="/calculateur.html" class="green roboto-bold">Calculateur</a>
                <a href="/contact.html" class="green">Contact</a>
            </div>
            <button class="navbar-toggle bg-btn" id="navbar-toggle" onclick="burgerMenu()">ZP</button>
            <ul class="navbar-mobile d-flex d-none" id="navbar-mobile">
                <li><a href="/index.html">Accueil</a></li>
                <li><a href="/inventions.html">Mode d'emploi</a></li>
                <li><a href="/about.html">Trouver un vélib</a></li>
                <li><a href="/calculateur.html">Calculateur</a></li>
                <li><a href="/contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    `
    document.body.prepend(header)
}

// Display the footer on every page
function displayFooter() {
    console.log('displayFooter')
    const footer = document.createElement('footer')
    footer.innerHTML = `
        <p>&copy; 2024 Zéphyrus Plimplom</p>
            <ul class="footer-desktop">
                <li><a href="/index.html">Accueil</a></li>
                <li><a href="/modeEmploi.html">Mode d'emploi</a></li>
                <li><a href="/trouver_un_velib.html">Trouver un vélib</a></li>
                <li><a href="/contact.html">Calculateur</a></li>
                <li><a href="/contact.html">Contact</a></li>
                </ul>
    `
    document.body.append(footer)
}

// Burger menu
function burgerMenu() {
    console.log('burgerMenu')
    const navbarMobile = document.getElementById('navbar-mobile')
    navbarMobile.classList.toggle('d-none')
}

displayHeader()
displayFooter()
burgerMenu()