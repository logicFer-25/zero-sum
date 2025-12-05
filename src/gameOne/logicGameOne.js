import { gameCard } from "../views/gameOneView.js";

const values = [
    {
        id: "rock",
        src: "/assets/img/piedra.png"
    },
    {
        id: "paper",
        src: "/assets/img/papel.png"
    },
    {
        id: "scissors",
        src: "/assets/img/tijeras.png"
    },
]

const asignRandomValue = () => {
    const randomValues = [];

    for(let i = 0; i < 3; i++){
        randomValues.push(values[Math.floor(Math.random() * values.length)]);
    }
    return randomValues;
}



export function renderCards() {
    const userSection = document.getElementById("game1-user-list");
    const botSection = document.getElementById("game1-bot-list");

    userSection.innerHTML = "";
    botSection.innerHTML = "";

    const userValues = asignRandomValue();
    const botValues = asignRandomValue();

    userValues.forEach((item) => {
        const cardElement = gameCard(item.src, false);
        userSection.appendChild(cardElement);
    });

    botValues.forEach((item) => {
        const cardElement = gameCard(item.src, true);
        botSection.appendChild(cardElement);
    });

    return {
        userValues,
        botValues
    };
}
