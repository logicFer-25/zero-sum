let userChoices = [];
let botChoices = [];
let roundLocked = false;

let discardPhase = false;
let discardTimer = null;
const DISCARD_TIME_LIMIT = 5000; // 5s por ejemplo

export function initGameTwoLogic(choice) {
    if (roundLocked || discardPhase) return;

    if (userChoices.length < 2) {
        userChoices.push(choice);
        return;
    }

    if (userChoices.length === 2) {
        roundLocked = true;
        botChoices = generateBotChoices();

        console.log('user:', userChoices);
        console.log('bot:', botChoices);

        startDiscardPhase();
        return;
    }
}


function generateBotChoices() {
    const botList = document.querySelectorAll("#game2-bot-list .game2-option");
    const arr = [];

    for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * botList.length);
        arr.push(botList[randomIndex].dataset.value);
    }

    return arr;
}

function startDiscardPhase() {
    discardPhase = true;

    // El bot descarta automáticamente
    botChoices = discardBotOption(botChoices);

    // Timer para el usuario
    discardTimer = setTimeout(() => {
        handleUserTimeout();
    }, DISCARD_TIME_LIMIT);
}


function discardBotOption(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const newArr = [...arr];
    newArr.splice(randomIndex, 1); // elimina 1 opción
    return newArr;
}

export function userDiscard(choiceToRemove) {
    if (!discardPhase) return;

    const idx = userChoices.indexOf(choiceToRemove);
    if (idx === -1) return;

    // quitar carta
    userChoices.splice(idx, 1);

    // cancelamos el timer
    clearTimeout(discardTimer);

    discardPhase = false;

    console.log("Usuario descartó:", choiceToRemove);
    console.log("USER final:", userChoices);
    console.log("BOT final:", botChoices);

    compareChoices();
}



function handleUserTimeout() {
    discardPhase = false;

    // el usuario pierde automáticamente
    console.log("El usuario tardó demasiado. Pierde.");

    // aquí puedes emitir un evento o llamar a una función externa
    // example: roundResult("bot");

    resetRound();
}


function resetRound() {
    userChoices = [];
    botChoices = [];
    roundLocked = false;
    discardPhase = false;
    clearTimeout(discardTimer);
}

function compareChoices() {
    if (userChoices.length !== 1 || botChoices.length !== 1) {
        console.warn("No se puede comparar — faltan opciones.");
        return;
    }

    const user = userChoices[0];
    const bot = botChoices[0];

    console.log(`Comparando -> USER: ${user}  vs  BOT: ${bot}`);

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

    console.log("Ganador:", winner);

    // Aquí puedes llamar a tu UI:
    // updateScoreUI(winner)
    // showRoundResultModal(winner)
    // animateCards(user, bot, winner)

    resetRound();
    return winner;
}