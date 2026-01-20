import { getCurrentTheme } from "./theme/theme.js"

const NAV_ROUTES = {
    Home: "/",
    News: "/pages/news/",
    Stories: "/pages/stories/",
    Character: "/pages/cast/",
    Machines: "/pages/technology/",
    Nature: "/pages/nature/",
    Art: "/pages/art/",
    Shop: "/pages/pardonourdust/",
    Contact: "/pages/contact/"
}

function initNavBar() {
    const buttons = document.querySelectorAll(".navbtn")
    const currentPath = window.location.pathname

    buttons.forEach(btn => {
        const name = btn.dataset.name
        const route = NAV_ROUTES[name]
        if (!route) return
        btn.addEventListener("mouseenter", () => {
            setButtonState(btn, true)
        })

        btn.addEventListener("mouseleave", () => {
            setButtonState(btn, false)
        })
        btn.addEventListener("click", () => {
            window.location.href = route
        })
        btn.style.cursor = "pointer"
    })
}

function setButtonState(button, isActive) {
    const currentTheme = getCurrentTheme()
    const name = button.dataset.name
    const state = isActive ? "Select" : ""

    button.src = `/assets/home/Buttons/Top/${currentTheme}/${name}${currentTheme}${state}.png`
}

export { initNavBar }