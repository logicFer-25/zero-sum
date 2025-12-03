import { stateGlobal } from "./appState.js";


export function events () {

    document.addEventListener('click', (e) => {
        const t = e.target;

        if (t.closest('.home-mode-btn--one')) {
            console.log('mode one redy');
            stateGlobal.setView(1);
            return;
        }

        if (t.closest('.home-mode-btn--two')) {
            console.log('mode two redy')
            return;
        }
    })

}