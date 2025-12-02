
import { renderUI } from "./views/renderUI.js";
import { stateGlobal } from "./core/appState.js";


stateGlobal.subscribe(renderUI);

renderUI(stateGlobal.getView());