import { initNavBar } from "./navbar.js";
import { applyGlobalTheme } from "./theme/theme.js";

function initLayout() {
    initNavBar()
    applyGlobalTheme(localStorage.getItem(theme) || "Pink")
}

const wipCursor = document.getElementById("wipCursor");

if (wipCursor) {
    document.addEventListener("mousemove", (e) => {
        wipCursor.style.left = `${e.clientX}px`;
        wipCursor.style.top = `${e.clientY}px`;
    });

    document.addEventListener("mouseover", (e) => {
        const target = e.target.closest("[data-wip]");
        if (!target) return;

        wipCursor.style.opacity = "1";
    });

    document.addEventListener("mouseout", (e) => {
        const target = e.target.closest("[data-wip]");
        if (!target) return;

        wipCursor.style.opacity = "0";
    });
}

initLayout()