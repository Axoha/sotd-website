import THEMES from "./themeMap.js"

let currentTheme = "Pink"

function applyGlobalTheme(themeName) {
    const theme = THEMES[themeName] ?? THEMES.Pink
    currentTheme = THEMES[themeName] ? themeName : "Pink"

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

const themeSelect = document.getElementById("themeSelect");

if (themeSelect) {
    themeSelect.value = currentTheme;
    themeSelect.addEventListener("change", (e) => {
        applyGlobalTheme(e.target.value)
    })
}

applyGlobalTheme(currentTheme)

export { applyGlobalTheme, getCurrentTheme }
