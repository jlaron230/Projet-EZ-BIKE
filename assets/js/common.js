// Display the header on every page
function displayHeader() {
    console.log('displayHeader')
    const header = document.createElement('header')
    header.innerHTML = `
    <header>
        <nav>
            <a href="/index.html" class="nav-brand">ZP</a>
            <ul class="navbar-desktop">
                <li><a href="/index.html">Accueil</a></li>
                <li><a href="/modeEmploi.html">Mode d'emploi</a></li>
                <li><a href="/trouver_un_velib.html">Trouver un vélib</a></li>
                <li><a href="/contact.html">Calculateur</a></li>
                <li><a href="/contact.html">Contact</a></li>
                </ul>
            <button class="navbar-toggle bg-btn" id="navbar-toggle" onclick="burgerMenu()">ZP</button>
            <ul class="navbar-mobile d-flex d-none" id="navbar-mobile">
                <li><a href="/index.html">Accueil</a></li>
                <li><a href="/inventions.html">Mode d'emploi</a></li>
                <li><a href="/about.html">Trouver un vélib</a></li>
                <li><a href="/contact.html">Calculateur</a></li>
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