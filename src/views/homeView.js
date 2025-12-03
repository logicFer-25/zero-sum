

export function renderHomeView(appDiv) {
    appDiv.innerHTML = "";

    const container = document.createElement("div");
    container.id = "home-view";

    container.innerHTML = `
        <header class="home-header">
            <h1 class="home-title"> Zero Sum </h1>
            <a class="home-link" href="https://github.com/logicFer-25/zero-sum" target="_blank" rel="noopener noreferrer">
                <img src="../../assets/img/github-mark-white.svg" width="32px">
            </a>
        </header>

        <main class="home-main">

            <section class="home-modes">

                <article class="home-mode-card home-mode-card--one">
                    <h2 class="home-mode-title"> Card Duel </h2>
                    <p class="home-mode-description">
                        Select a card, reveal it at the same time as your opponent, and win following the rock-paper-scissors rules.
                    </p>
                </article>

                <article class="home-mode-card  home-mode-card--two">
                    <h2 class="home-mode-title"> Game mode 2 </h2>
                    <p class="home-mode-description">  </p>
                </article>

            </section>

        </main>

        <footer class="home-footer">

            <section class="home-footer-contact">
                <h3 class="home-footer-title">Contact</h3>
                <ul class="home-footer-list">
                    <li><a href="mailto:tucorreo@gmail.com" class="home-footer-link">tucorreo@gmail.com</a></li>
                    <li><a href="https://www.linkedin.com/in/tu-linkedin" target="_blank" rel="noopener noreferrer" class="home-footer-link">LinkedIn</a></li>
                    <li><a href="https://github.com/LogicFer" target="_blank" rel="noopener noreferrer" class="home-footer-link">GitHub Profile</a></li>
                </ul>
            </section>

            <section class="home-footer-credits">
                <small>© 2025 LogicFer — Crafted with JavaScript Vanilla</small>
            </section>
        </footer>

    `;

    appDiv.appendChild(container);
}
