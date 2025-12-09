import { checkIfGameEnded, getRandomBotCardElement, handleUserChoice, renderCards } from "../gameOne/logicGameOne.js";
import { moveCardToCenter, revealBotCard, updateCardUI, updateScoreUI } from "../gameOne/updateManager.js";
import { stateGlobal } from "./appState.js";
import { scoreManager } from "./scoreManager.js";


export function events () {

    document.addEventListener('click', (e) => {
        const t = e.target;

        if (t.closest('.home-mode-card--one')) {
            stateGlobal.setView(1);
            document.body.style.backgroundColor = 'var(--mode1-bg)'
            return;
        }

        if (t.closest('.home-mode-card--two')) {
            stateGlobal.setView(2);
            return;
        }

        if (t.closest('.game-back-btn')) {
            scoreManager.resetScores();
            stateGlobal.setView(0);      
            document.body.style.backgroundColor = 'var(--ui-bg)';  
            return;
        }


        if (t.closest('.game1-card-inner')) {

            const clickedInner = t.closest('.game1-card-inner');

            if (clickedInner.dataset.hidden === "true") return;

            updateCardUI(clickedInner);

            const botCardEl = getRandomBotCardElement();
            const botInner = botCardEl.querySelector(".game1-card-inner");

            handleUserChoice(
                clickedInner.dataset.value,
                botInner.dataset.value
            );

            revealBotCard(botCardEl);

            moveCardToCenter(
                clickedInner.parentElement,
                ".game1-card-slot--user"
            );

            moveCardToCenter(
                botCardEl,
                ".game1-card-slot--bot"
    );

            updateScoreUI();

            setTimeout(() => {
                checkIfGameEnded();
                return;

            }, 3000)

            return;
        }

        if (t.closest(".game1-btn-restart")) {
            scoreManager.resetScores();
            renderCards(); 
            updateScoreUI();
            const modal = document.getElementById("game1-end-modal");
            if (modal) {
                modal.classList.add("hidden") 
                return;
            };
            return;
        }
        if (t.closest(".game1-btn-exit")) {
            scoreManager.resetScores();
            stateGlobal.setView(0);
            const modal = document.getElementById("game1-end-modal");
            if (modal) {
                modal.classList.add("hidden")
                return;
            };
            return;
        }




    })

}
