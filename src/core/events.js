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

    })

}