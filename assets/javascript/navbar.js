import { getCurrentTheme, onThemeChange } from "./theme/theme.js"

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

let activeNavKey = null
    
function initNavBar() {
    const buttons = document.querySelectorAll(".navbtn")
    const currentPath = window.location.pathname

    buttons.forEach(btn => {
        const name = btn.dataset.name
        const route = NAV_ROUTES[name]
        if (!route) return

        //if the button is home it will check if we're at /, otherwise it will check if currentPath starts with route (which for everything else is /pages/something)
        const isActive =
            route === "/"
                ? currentPath === "/"
                : currentPath.startsWith(route)

        if (!isActive) {

            btn.addEventListener("mouseenter", () => {
                setButtonState(btn, true)
            })

            btn.addEventListener("mouseleave", () => {
                setButtonState(btn, false)
            })
        } else {

            activeNavKey = name
            setActive(btn)

        }

        btn.addEventListener("click", () => {
            window.location.href = route
        })
        btn.style.cursor = "pointer"
    })
}

function setActive(btn) {
    const theme = getCurrentTheme()
    const name = btn.dataset.name

    btn.src = `/assets/home/Buttons/Top/${theme}/${name}${theme}Select.png`
}

function setButtonState(button, isActive) {
    const currentTheme = getCurrentTheme()
    const name = button.dataset.name
    const state = isActive ? "Select" : ""

    button.src = `/assets/home/Buttons/Top/${currentTheme}/${name}${currentTheme}${state}.png`
}

function syncNavBarWithTheme(){
    const buttons = document.querySelectorAll(".navbtn")

    buttons.forEach(btn => {
        const name = btn.dataset.name

        if (name === activeNavKey) {
            setActive(btn)
        } else {
            setButtonState(btn, false)
        }
    })
}

onThemeChange(() => {
    syncNavBarWithTheme()
})

export { initNavBar, syncNavBarWithTheme }