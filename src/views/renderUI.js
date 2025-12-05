import { renderCards } from "../gameOne/logicGameOne.js";
import { renderGameOneView } from "./gameOneView.js";
import { renderHomeView } from "./homeView.js";


export function renderUI(view) {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = '';

    if (view === 0) {
        renderHomeView(appDiv)
        return
    };


    if (view === 1) {
        renderGameOneView(appDiv);
        renderCards();
        return;
    };


    if (view === 3) {
        return;
    };
}