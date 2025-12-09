

export function renderGameOneView(appDiv) {
    appDiv.innerHTML = "";

    const container = document.createElement("div");
    container.id = "game1-view";

    container.innerHTML = `
        <header class="game1-header">
            <h1 class="game1-title">Card Duel</h1>
            <button class="game-back-btn">← Back</button>
        </header>

        <main class="game1-main">

            <section class="game1-scoreboard">
                <article class="game1-score-card game1-score-card--user">
                    <h2 class="game1-score-title">User</h2>
                    <p class="game1-score-value">0</p>
                </article>

                <article class="game1-score-card game1-score-card--bot">
                    <h2 class="game1-score-title">Bot</h2>
                    <p class="game1-score-value">0</p>
                </article>
            </section>

            <div class="game1-area-gamwplay">

                <section id="game1-user-list" class="game1-card-list">
                </section>

                <section class="game1-cards">
                    <div class="game1-vs-divider">                    
                        <article class="game1-card-slot game1-card-slot--user">
                        </article>
                
                        <h2 class="game1-vs-title">VS</h2>
                
                        <article class="game1-card-slot game1-card-slot--bot">
                        </article>
                    </div>
                </section>

                <section id="game1-bot-list" class="game1-card-list">

                </section>
            </div>

        </main>


        <div id="game1-end-modal" class="game1-modal hidden">
            <div class="game1-modal-content">
                <h2 class="game1-modal-title">Game Finished</h2>
                <p class="game1-modal-text">What do you want to do?</p>

                <div class="game1-modal-actions">
                    <button class="game1-modal-btn game1-btn-restart">Restart</button>
                    <button class="game1-modal-btn game1-btn-exit">Exit</button>
                </div>
            </div>
        </div>

    `;

    appDiv.appendChild(container);
}


export const gameCard = (value, src, hidden = false) => {
    const card = document.createElement("article");
    card.className = "game1-card";

    card.innerHTML = `
        <div 
            class="game1-card-inner ${hidden ? "game1-card-hidden" : ""}" 
            data-value="${value}"
            data-src="${src}"
            data-hidden="${hidden}"
        >
            <img 
                src="${hidden ? "" : src}" 
                class="game1-card-img"
                data-value="${value}"
            >
        </div>
    `;

    return card;
};
