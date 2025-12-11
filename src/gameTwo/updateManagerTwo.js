import { scoreManager } from "../core/scoreManager.js";

export function markOption(option) {
    option.classList.add("game2-option--selected");
}


export function hideDiscarded(option) {
    option.classList.add("game2-option--discarded");
}


export function highlightFinalChoice(option) {
    option.classList.add("game2-option--final");
}


export function resetStylesGameTwo() {
    const all = document.querySelectorAll(".game2-option");
    all.forEach(opt => {
        opt.classList.remove(
            "game2-option--selected",
            "game2-option--discarded",
            "game2-option--final"
        );
    });
}


export function updateScoreUITwo() {
    const userScoreEl = document.querySelector('.game2-score-card--user .game2-score-value');
    const botScoreEl = document.querySelector('.game2-score-card--bot .game2-score-value');

    userScoreEl.textContent = scoreManager.getUserScore();
    botScoreEl.textContent = scoreManager.getBotScore();
}
