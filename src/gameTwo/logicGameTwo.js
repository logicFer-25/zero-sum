import { scoreManager } from "../core/scoreManager.js";
import { 
    markOption,
    hideDiscarded,
    highlightFinalChoice,
    resetStylesGameTwo,
    updateScoreUITwo
} from "./updateManagerTwo.js";

let userChoices = [];   // Máximo 2
let botChoices = [];    // Máximo 2
let roundLocked = false;

let discardPhase = false;
let discardTimer = null;
const DISCARD_TIME_LIMIT = 5000;
const RESET_DELAY = 3000;  // <-- Tiempo real que definiste


export function initGameTwoLogic(elment) {
    if (roundLocked || discardPhase) return;

    const value = elment.dataset.value;

    if (userChoices.length < 2) {
        userChoices.push(value);
        markOption(elment);


        if (userChoices.length === 2) {
            roundLocked = true;
            botChoices = generateBotChoices();
            startDiscardPhase();
        }
        
    }
}


function generateBotChoices() {
    const botList = document.querySelectorAll("#game2-bot-list .game2-option");
    const arr = [];

    for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * botList.length);
        const card = botList[randomIndex];

        markOption(card); // <-- visible
        arr.push(card.dataset.value);
    }

    return arr;
}


function startDiscardPhase() {
    discardPhase = true;

    botChoices = discardBotOption([...botChoices]);
    applyBotDiscardUI(botChoices);

    discardTimer = setTimeout(handleUserTimeout, DISCARD_TIME_LIMIT);
}


function discardBotOption(arr) {
    const index = Math.floor(Math.random() * arr.length);
    arr.splice(index, 1);
    return arr; // queda 1
}


function applyBotDiscardUI(botFinal) {
    const items = document.querySelectorAll("#game2-bot-list .game2-option");

    items.forEach(card => {
        if (!botFinal.includes(card.dataset.value)) {
            hideDiscarded(card);
        }
    });

    items.forEach(card => {
        if (botFinal.includes(card.dataset.value)) {
            highlightFinalChoice(card);
        }
    });
}


export function userDiscard(elment) {
    if (!discardPhase) return;
    const value = elment.dataset.value;
    const index = userChoices.filter(v => v === value);
    if (index === -1) return;

    userChoices.splice(index, 1);

    hideDiscarded(elment);
    clearTimeout(discardTimer);

    discardPhase = false;

    highlightUserFinalChoice(userChoices[0]);
    finalizeRound();
}


function highlightUserFinalChoice(finalValue) {
    const cards = document.querySelectorAll("#game2-user-list .game2-option");

    cards.forEach(card => {
        if (card.dataset.value === finalValue) {
            highlightFinalChoice(card);
        }
    });
}

function handleUserTimeout() {
    discardPhase = false;

    scoreManager.addBotPoint();
    updateScoreUITwo();

    resetRound();
}

function finalizeRound() {
    if (userChoices.length !== 1 || botChoices.length !== 1) return;

    const user = userChoices[0];
    const bot = botChoices[0];


    let winner = null;

    if (user === bot) {
        winner = "draw";
    } else if (
        (user === "rock"     && bot === "scissors") ||
        (user === "paper"    && bot === "rock")     ||
        (user === "scissors" && bot === "paper")
    ) {
        winner = "user";
    } else {
        winner = "bot";
    }


    if (winner === "user") scoreManager.addUserPoint();
    if (winner === "bot") scoreManager.addBotPoint();

    updateScoreUITwo();
    delayedResetRound();
}

function delayedResetRound() {

    setTimeout(() => {
        resetRound();
    }, RESET_DELAY);
}


/* Limpieza total de la ronda */
function resetRound() {
    resetStylesGameTwo();

    userChoices = [];
    botChoices = [];
    roundLocked = false;
    discardPhase = false;

    clearTimeout(discardTimer);

}