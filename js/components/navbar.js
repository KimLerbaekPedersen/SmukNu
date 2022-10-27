const nav = document.querySelector('#navbar');

nav.innerHTML += `<header id="nav">
<div class="nav-container">
    <a href="../index.html"><img class="logo" src="../assets/logo/smuknu_logo.png" alt="logo Smuk.Nu"></a>
    <nav id="menu">
        <ul>
            <li><a href="../index.html">Forsiden</a></li>
            <li><a href="../html/produkter.html">Vores produkter</a></li>
            <li><a href="../html/sundhed.html">Spørg om sundhed</a></li>
            <li><a href="../html/medlem.html">Bliv medlem</a></li>
        </ul>
    </nav>
    <div onclick="openMenu()" id="burger-icon">
        <i class="fa-solid fa-bars fa-2x"></i>
    </div>
</div>
</header>`