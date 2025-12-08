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


export function revealBotCard(cardElement) {
    const inner = cardElement.querySelector(".game1-card-inner");
    const img = cardElement.querySelector(".game1-card-img");

    const realSrc = inner.dataset.src;

    inner.classList.remove("game1-card-hidden");
    inner.dataset.hidden = "false";

    img.src = realSrc;
}

export function moveCardToCenter(cardElement, slotSelector) {
    const slot = document.querySelector(slotSelector);

    if (!slot) return;

    slot.innerHTML = "";

    slot.appendChild(cardElement);
}
