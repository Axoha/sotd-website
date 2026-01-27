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

const logoDiv = document.querySelector(".logo")
const logoDivChildren = logoDiv.children
logoDivChildren[1].href = "/pages/pardonourdust" //change this to change what page the bumper links to
logoDivChildren[1].children[0].src = "/assets/bumper.png" //change this to change the image of the bumper, or just replace the file with the desired image ig, might need some css work 

initLayout()