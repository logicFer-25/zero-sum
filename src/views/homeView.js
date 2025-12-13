

export function renderHomeView(appDiv) {
    appDiv.innerHTML = "";

    const container = document.createElement("div");
    container.id = "home-view";

    container.innerHTML = `
        <header class="home-header">
            <h1 class="home-title"> Zero Sum </h1>
            <a class="home-link" href="https://github.com/logicFer-25/zero-sum" target="_blank" rel="noopener noreferrer">
                <img src="./assets/img/github-mark-white.svg" width="32px">
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
                    <h2 class="home-mode-title"> RPS Minus One </h2>
                    <p class="home-mode-description">
                        Choose two moves, then discard one under pressure. Your final choice faces the bot—choose wisely or lose by timeout.
                    </p>
                </article>

            </section>

        </main>

        <footer class="home-footer">

            <section class="home-footer-contact">
                <h3 class="home-footer-title">Contact</h3>
                <ul class="home-footer-list">
                    <li>
                        <a href="mailto:victoriafloresfederico@gmail.com" class="home-footer-link">victoriafloresfederico@gmail.com</a></li>
                    <li>
                        <a 
                        href="https://www.linkedin.com/in/federico-victoria-flores-b66884397?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                        target="_blank" rel="noopener noreferrer" class="home-footer-link">Linkedin</a></li>
                    <li>
                        <a href="https://github.com/LogicFer-25" target="_blank" rel="noopener noreferrer" class="home-footer-link">GitHub </a></li>
                </ul>
            </section>

            <section class="home-footer-credits">
                <small>© 2025 LogicFer — Crafted with JavaScript Vanilla</small>
            </section>
        </footer>

    `;

    appDiv.appendChild(container);
}
