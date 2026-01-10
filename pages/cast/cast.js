import THEMES from "/assets/themeMap.js"

const logo = document.getElementById("logo")
const homeUi = document.getElementById("ui")
const buttons = document.querySelectorAll(".navbtn")
const secretButtons = document.getElementById("secretButtons")

function setButtonState(button, isActive) {
    const name = button.dataset.name
    const state = isActive ? "Select" : ""

    button.src = `/assets/home/Buttons/Top/${currentTheme}/${name}${currentTheme}${state}.png`
}

buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        setButtonState(btn, true)
    })

    btn.addEventListener("mouseleave", () => {
        setButtonState(btn, false)
    })
})

function applyTheme(themeName){
    const theme = THEMES[themeName] ?? THEMES.Pink
    const safeName = THEMES[themeName] ? themeName : "Pink"

    logo.src = `/assets/home/Logo/Logo${safeName}.png`
    homeUi.src = `/assets/home/PageEmpty/RightSidebar/PageSidebar${safeName}.png`
    secretButtons.src = `/assets/home/Buttons/BottomSecret/SecretButtonRow${safeName}.png`

    buttons.forEach(btn => {
        btn.src = `/assets/home/Buttons/Top/${safeName}/${btn.dataset.name}${safeName}.png`
    })

    document.body.style.backgroundImage = `url(/assets/home/ChosenBackgrounds/${theme.defaultBg}.png)`

    characterTitle.style.color = theme.accent;

    currentTheme.safeName
}

//carousel stuff below

const track = document.querySelector(".carouselTrack")
const slides = track.children
const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")

let index = 0

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`
}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length
    updateCarousel()
})

prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length
    updateCarousel()
})

let currentTheme = "Pink";
applyTheme(currentTheme)

const themeSelect = document.getElementById("themeSelect");
themeSelect.value = currentTheme;
themeSelect.addEventListener("change", (e) => {
    applyTheme(e.target.value)
    currentTheme = e.target.value
})