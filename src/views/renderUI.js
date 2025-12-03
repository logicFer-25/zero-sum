import { renderHomeView } from "./interface.js";


export function renderUI(view) {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = '';

    if (view === 0) {
        renderHomeView(appDiv)

        return
    };


    if (view === 1) {};


    if (view === 3) {};
}