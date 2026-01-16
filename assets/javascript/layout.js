import { initNavBar } from "./navbar.js";
import { applyGlobalTheme } from "./theme/theme.js";

function initLayout() {
    initNavBar()
    //later it would be interesting to use localstorage here so your chosen theme doesn't reset to pink every time you switch pages
    applyGlobalTheme("Pink")
}

initLayout()