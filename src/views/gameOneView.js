

export function renderGameOneView(appDiv) {
    appDiv.innerHTML = "";

    const container = document.createElement("div");
    container.id = "game1-view";

    container.innerHTML = `
        <header class="game1-header">
            <h1 class="game1-title">Game Mode 1</h1>
            <button class="game1-back-btn">← Back</button>
        </header>

        <main class="game1-main">

            <section class="game1-scoreboard">
                <article class="game1-score-card game1-score-card--user">
                    <h2 class="game1-score-title">You</h2>
                    <p class="game1-score-value">0</p>
                </article>

                <article class="game1-score-card game1-score-card--bot">
                    <h2 class="game1-score-title">Bot</h2>
                    <p class="game1-score-value">0</p>
                </article>
            </section>

            <section class="game1-cards">
                <article class="game1-card-slot game1-card-slot--user">
                    <!-- user card img goes here -->
                </article>

                <article class="game1-card-slot game1-card-slot--bot">
                    <!-- bot card img goes here -->
                </article>
            </section>

            <section class="game1-actions">
                <button class="game1-btn game1-btn--play">Play Round</button>
                <button class="game1-btn game1-btn--reset">Reset</button>
            </section>

        </main>
    `;

    appDiv.appendChild(container);
}
