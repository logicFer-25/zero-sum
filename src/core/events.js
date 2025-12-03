import { stateGlobal } from "./appState.js";


export function events () {

    document.addEventListener('click', (e) => {
        const t = e.target;

        if (t.closest('.home-mode-card--one')) {
            console.log('mode one redy');
            stateGlobal.setView(1);
            return;
        }

        if (t.closest('.home-mode-card--two')) {
            console.log('mode two redy')
            return;
        }
    })

}