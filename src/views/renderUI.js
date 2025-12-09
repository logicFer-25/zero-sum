import { renderCards } from "../gameOne/logicGameOne.js";
import { renderGameOneView } from "./gameOneView.js";
import { renderGameTwoView } from "./gameTwoView.js";
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


    if (view === 2) {
        renderGameTwoView(appDiv);
        return;
    };
}