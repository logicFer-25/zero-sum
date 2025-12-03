
import { renderUI } from "./views/renderUI.js";
import { stateGlobal } from "./core/appState.js";
import { events } from "./core/events.js";

events();

stateGlobal.subscribe(renderUI);

renderUI(stateGlobal.getView());