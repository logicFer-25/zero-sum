import { scoreManager } from "../gameCore/scoreManager.js";

export function updateGameOneScoreUI() {
    const userScoreEl = document.querySelector(".game1-score-card--user .game1-score-value");
    const botScoreEl = document.querySelector(".game1-score-card--bot .game1-score-value");

    if (!userScoreEl || !botScoreEl) return; 

    userScoreEl.textContent = scoreManager.getUserScore();
    botScoreEl.textContent = scoreManager.getBotScore();
}
