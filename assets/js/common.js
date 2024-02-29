// Display the header on every page
function displayHeader() {
    console.log('displayHeader')
    const header = document.createElement('header')
    header.innerHTML = `
    <header>
    <div id="root" class="header-box">
      <div id="topnav" class="topnav">
        <a id="home_link" class="topnav_link" href="index.html"><img src="../image/ez-bike_logo.svg" alt="Logo"></a>

        <!-- Classic Menu -->
        <nav role="navigation" id="topnav_menu">
          <a class="topnav_link" href="index.html">Accueil</a>
          <a class="topnav_link" href="modeEmploi.html">Mode d'emploi</a>
          <a class="topnav_link" href="trouver-un-velib.html">Trouver un vélib</a>
          <a class="topnav_link" href="calculateur.html">Calculateur</a>
          <a class="topnav_link" href="contact.html">Contact</a>
          <a class="topnav_link" href="comingSoon.html">C'est pour le ménage</a>
        </nav>

        <a
          id="topnav_hamburger_icon"
          href="#"
          onclick="showResponsiveMenu()"
        >
          <!-- Some spans to act as a hamburger -->
          <span></span>
          <span></span>
          <span></span>
        </a>

        <!-- Responsive Menu -->
        <nav role="navigation" id="topnav_responsive_menu">
          <ul>
            <li><a class="topnav_link" href="index.html">Accueil</a></li>
            <li><a class="topnav_link" href="modeEmploi.html">Mode d'emploi</a></li>
            <li><a class="topnav_link" href="trouver-un-velib.html">Trouver un vélib</a></li>
            <li><a class="topnav_link" href="calculateur.html">Calculateur</a></li>
            <li><a class="topnav_link" href="contact.html">Contact</a></li>
            <li><a class="topnav_link" href="comingSoon.html">C'est pour le ménage</a></li>
        </ul>
        </nav>
      </div>
    </div>
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
        <div class="d-flex jc-sb mt-3 wrap">
        <p class="m-f">&copy; 2024 Zéphyrus Plimplom</p>
            <ul class="footer-desktop m-f d-flex g-2">
                <li><a href="/index.html" class="link-footer">Accueil</a></li>
                <li><a href="/modeEmploi.html" class="link-footer">Mode d'emploi</a></li>
                <li><a href="/trouver-un-velib.html" class="link-footer">Trouver un vélib</a></li>
                <li><a href="/contact.html" class="link-footer">Calculateur</a></li>
                <li><a href="/contact.html" class="link-footer">Contact</a></li>
                <li><a href="/comingSoon.html" class="link-footer">C'est pour le ménage</a></li>
                </ul>
            </div>
    `
    document.body.append(footer)
}

// Burger menu
function showResponsiveMenu() {
    var menu = document.getElementById("topnav_responsive_menu");
    var icon = document.getElementById("topnav_hamburger_icon");
    var root = document.getElementById("root");
    if (menu.className === "") {
        menu.className = "open";
        icon.className = "open";
        root.style.overflowY = "hidden";
    } else {
        menu.className = "";
        icon.className = "";
        root.style.overflowY = "";
    }
}

displayHeader();
displayFooter();
