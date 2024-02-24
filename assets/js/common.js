// Display the header on every page
function displayHeader() {
    console.log('displayHeader')
    const header = document.createElement('header')
    header.innerHTML = `
    <header>
        <nav class="d-flex wrap" >
            <div class="navbar-desktop minw-90 wrap d-flex jc-fs ai-c bs-op-0_2 g-2">
                <a href="/index.html" class="nav-brand"><img src="../image/ez-bike_logo.svg" style="width: 150px"></a>
                <a href="/index.html" class="link-navbar">Accueil</a>
                <a href="/modeEmploi.html" class="link-navbar">Mode d'emploi</a>
                <a href="/about.html" class="link-navbar">Trouver un vélib</a>
                <a href="/calculateur.html" class="link-navbar">Calculateur</a>
                <a href="/contact.html" class="link-navbar">Contact</a>
                <a href="/comingSoon.html" class="link-navbar">C'est pour le ménage</a>
            </div>

            <button class="navbar-toggle bg-btn" id="navbar-toggle" onclick="burgerMenu()">ZP</button>
            <ul class="navbar-mobile d-flex" id="navbar-mobile">
                <li><a href="/index.html">Accueil</a></li>
                <li><a href="/inventions.html">Mode d'emploi</a></li>
                <li><a href="/about.html">Trouver un vélib</a></li>
                <li><a href="/calculateur.html">Calculateur</a></li>
                <li><a href="/contact.html">Contact</a></li>
                <li><a href="/comingSoon.html">C'est pour le ménage</a></li>
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
    footer.classList.add('mb-3', 'border-s', 'mt-3')
    footer.innerHTML = `
        <div class="d-flex jc-sb mt-3 ">
        <p class="m-f">&copy; 2024 Zéphyrus Plimplom</p>
            <ul class="footer-desktop m-f d-flex g-2">
                <li><a href="/index.html" class="link-footer">Accueil</a></li>
                <li><a href="/modeEmploi.html" class="link-footer">Mode d'emploi</a></li>
                <li><a href="/trouver_un_velib.html" class="link-footer">Trouver un vélib</a></li>
                <li><a href="/contact.html" class="link-footer">Calculateur</a></li>
                <li><a href="/contact.html" class="link-footer">Contact</a></li>
                <li><a href="/comingSoon.html" class="link-footer">C'est pour le ménage</a></li>
                </ul>
            </div>
    `
    document.body.append(footer)
}

// Burger menu
function burgerMenu() {
    console.log('burgerMenu')
    const navbarMobile = document.getElementById('navbar-mobile')
    navbarMobile.classList.toggle('d-none')
}

displayHeader();
displayFooter();
