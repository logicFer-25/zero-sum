
import { scoreManager } from "../core/scoreManager.js";
import { gameCard } from "../views/gameOneView.js";

const values = [
    {
        id: "rock",
        src: "../../assets/img/piedra.png"
    },
    { 
        id: "paper",
        src: "../../assets/img/papel.png" 
    },
    { 
        id: "scissors", 
        src: "../../assets/img/tijeras.png" 
    },
];

let userValues = [];
let botValues = [];

export function renderCards() {
    const userSection = document.getElementById("game1-user-list");
    const botSection = document.getElementById("game1-bot-list");

    userSection.innerHTML = "";
    botSection.innerHTML = "";

    userValues = asignRandom();
    botValues = asignRandom();

    userValues.forEach((item) => {
        userSection.appendChild(gameCard(item.id, item.src, false));
    });

    botValues.forEach((item) => {
        botSection.appendChild(gameCard(item.id, item.src, true));
    });
}

function asignRandom() {
    const arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push(values[Math.floor(Math.random() * values.length)]);
    }
    return arr;
}

export function handleUserChoice(choiceId,botChoice ) {
    const result = compare(choiceId, botChoice);

    if (result === "user") scoreManager.addUserPoint();
    if (result === "bot") scoreManager.addBotPoint();

    return { result, botChoice };
}

function compare(user, bot) {
    if (user === bot) return "draw";

    if (
        (user === "rock" && bot === "scissors") ||
        (user === "paper" && bot === "rock") ||
        (user === "scissors" && bot === "paper")
    ) {
        return "user";
    }

    return "bot";
}


export function getRandomBotCardElement() {
    const botCards = document.querySelectorAll("#game1-bot-list .game1-card");

    if (botCards.length === 0) return null;

    const index = Math.floor(Math.random() * botCards.length);
    return botCards[index];
}
