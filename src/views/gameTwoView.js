

export function renderGameTwoView(appDiv) {
    appDiv.innerHTML = "";

    const container = document.createElement("div");
    container.id = "game2-view";

    container.innerHTML = `
        <header class="game2-header">
            <h1 class="game2-title"> RPS Minus One </h1>
            <button class="game-back-btn">← Back</button>
        </header>

        <main class="game2-main">

            <section class="game2-scoreboard">
                <article class="game2-score-card game2-score-card--user">
                    <h2 class="game2-score-title">User</h2>
                    <p class="game2-score-value">0</p>
                </article>

                <article class="game2-score-card game2-score-card--bot">
                    <h2 class="game2-score-title">Bot</h2>
                    <p class="game2-score-value">0</p>
                </article>
            </section>

            <div class="game2-area-gamwplay">

                <section id="game2-user-list" class="game2-card-list">
                    <div class="game2-items">
                        <article class="game2-option" data-value="rock">
                            <img src="../../assets/img/piedra.png" class="game2-option-img" data-value="rock" >
                        </article>
                        <article class="game2-option" data-value="paper">
                            <img src="../../assets/img/papel.png" class="game2-option-img" data-value="paper" >
                        </article>
                        <article class="game2-option" data-value="scissors">
                            <img src="../../assets/img/tijeras.png" class="game2-option-img" data-value="scissors" >
                        </article>
                    </div>
                </section>

                <section class="game2-cards">
                    <div class="game2-vs-divider">                    
                        <article class="game2-card-slot game2-card-slot--user">
                        </article>
                
                        <h2 class="game2-vs-title">VS</h2>
                
                        <article class="game2-card-slot game2-card-slot--bot">
                        </article>
                    </div>
                </section>

                <section id="game2-bot-list" class="game2-card-list">
                    <div class="game2-items">
                        <article class="game2-option" data-value="rock">
                            <img src="../../assets/img/piedra.png" class="game2-option-img" data-value="rock" >
                        </article>
                        <article class="game2-option" data-value="paper">
                            <img src="../../assets/img/papel.png" class="game2-option-img" data-value="paper" >
                        </article>
                        <article class="game2-option" data-value="scissors">
                            <img src="../../assets/img/tijeras.png" class="game2-option-img" data-value="scissors" >
                        </article>
                    </div>
                </section>
            </div>

        </main>

    `;

    appDiv.appendChild(container);
}