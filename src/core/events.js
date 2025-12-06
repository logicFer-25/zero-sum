import { handleUserChoice } from "../gameOne/logicGameOne.js";
import { updateCardUI, updateScoreUI } from "../gameOne/updateManager.js";
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
            return;
        }

        if (t.closest('.game1-back-btn')) {
            scoreManager.resetScores();
            stateGlobal.setView(0);      
            document.body.style.backgroundColor = 'var(--ui-bg)';  
            return;
        }

        if (t.closest('.game1-card-inner')) {
            if (t.classList.contains('game1-card-hidden')) return;

            updateCardUI(t.closest('.game1-card-inner'));

            handleUserChoice(t.dataset.value);

            updateScoreUI();

            return;
        }


    })

}
