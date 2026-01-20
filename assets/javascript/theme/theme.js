import THEMES from "./themeMap.js"

let currentTheme = localStorage.getItem("theme") || "Pink"

function applyGlobalTheme(themeName) {
    const theme = THEMES[themeName] ?? THEMES.Pink
    currentTheme = THEMES[themeName] ? themeName : "Pink"

    localStorage.setItem("theme", currentTheme)

    document.body.style.backgroundImage =
        `url(/assets/home/ChosenBackgrounds/${theme.defaultBg}.png)`

    const logo = document.getElementById("logo")
    if (logo) {
        logo.src = `/assets/home/Logo/Logo${currentTheme}.png`
    }

    const ui = document.getElementById("ui")
    if (ui) {
        ui.src = `/assets/home/PageEmpty/RightSidebar/PageSidebar${currentTheme}.png`
    }

    const uiNoSideBar = document.getElementById("uiNoSideBar")
    if (uiNoSideBar) {
        uiNoSideBar.src = `/assets/home/PageEmpty/PageEmpty${currentTheme}.png`
    }

    const secretButtons = document.getElementById("secretButtons")
    if (secretButtons) {
        secretButtons.src =
            `/assets/home/Buttons/BottomSecret/SecretButtonRow${currentTheme}.png`
    }

    document.querySelectorAll(".navbtn").forEach(btn => {
        btn.src = `/assets/home/Buttons/Top/${currentTheme}/${btn.dataset.name}${currentTheme}.png`
    })

    document.documentElement.style.setProperty(
        "--theme-accent",
        theme.accent
    )
}

function getCurrentTheme() {
    return currentTheme
}

function initThemeDropdown() {
    const dropdown = document.querySelector(".themeDropdown")
    const toggle = document.querySelector(".themeToggle")
    const menu = document.querySelector(".themeMenu")

    if (!dropdown || !toggle || !menu) return

    //opening and closing of the dropdown
    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("open")
    })

    menu.addEventListener("click", (e) => {
        const option = e.target.closest(".themeOption")
        if (!option) return

        const theme = option.dataset.theme
        applyGlobalTheme(theme)
        menu.classList.remove("open")
    })

    document.addEventListener("click", () => {
        menu.classList.remove("open")
    })
}

applyGlobalTheme(currentTheme)
initThemeDropdown()

export { applyGlobalTheme, getCurrentTheme }
