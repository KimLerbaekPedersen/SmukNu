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
    <div onclick="menuShow()" id="burger">
        <svg viewBox="0 0 448 512" title="bars">
            <path
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
        </svg>
    </div>
</div>
</header>`