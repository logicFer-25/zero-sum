import { scoreManager } from "../core/scoreManager.js";



export function updateCardUI(clickedCardElement) {
    clickedCardElement.classList.add("game1-card-disabled");
    clickedCardElement.style.pointerEvents = "none";
}

export function updateScoreUI() {
    const userScoreEl = document.querySelector(".game1-score-card--user .game1-score-value");
    const botScoreEl = document.querySelector(".game1-score-card--bot .game1-score-value");

    userScoreEl.textContent = scoreManager.getUserScore();
    botScoreEl.textContent = scoreManager.getBotScore();
}