

export function renderGameOneView(appDiv) {
    appDiv.innerHTML = "";

    const container = document.createElement("div");
    container.id = "game1-view";

    container.innerHTML = `
        <header class="game1-header">
            <h1 class="game1-title">Card Duel</h1>
            <button class="game1-back-btn">← Back</button>
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
    `;

    appDiv.appendChild(container);
}


export const gameCard = (value , hidden = false) => {
    const card = document.createElement("article");
    card.className = "game1-card";
    card.innerHTML = `
        <div class="game1-card-inner ${hidden ? "game1-card-hidden" : ""}" >
            <img src=" ${hidden ? "" : value} " class="game1-card-img" >
        </div>
    `;
    return card;
}