import THEMES from "/assets/themeMap.js"

let currentTheme = "Green"

const theme = THEMES[currentTheme]

if (!theme) {
    console.warn("Invalid theme, falling back to Pink")
}

const safeTheme = theme ?? THEMES.Pink
const safeThemeName = theme ? currentTheme : "Pink"

const resolvedBackground = safeTheme.defaultBg

const logo = document.getElementById("logo")
const homeUi = document.getElementById("ui")
const buttons = document.querySelectorAll(".navbtn")
const secretButtons = document.getElementById("secretButtons")

secretButtons.src = `/assets/home/Buttons/BottomSecret/SecretButtonRow${safeThemeName}.png`
logo.src = `/assets/home/Logo/Logo${safeThemeName}.png`
homeUi.src = `/assets/home/PageEmpty/RightSidebar/PageSidebar${safeThemeName}.png`
document.body.style.backgroundImage = `url(../../assets/home/ChosenBackgrounds/${resolvedBackground}.png)`

function setButtonState(button, isActive) {
    const name = button.dataset.name
    const state = isActive ? "Select" : ""

    button.src = `/assets/home/Buttons/Top/${safeThemeName}/${name}${safeThemeName}${state}.png`
}

buttons.forEach(btn => {
    //initially sets each button to have the correct theme color
    btn.src = `/assets/home/Buttons/Top/${safeThemeName}/${btn.dataset.name}${safeThemeName}.png`

    btn.addEventListener("mouseenter", () => {
        setButtonState(btn, true)
    })

    btn.addEventListener("mouseleave", () => {
        setButtonState(btn, false)
    })
})

const characterTitle = document.getElementById("characterTitle")

characterTitle.style.color = safeTheme.accent

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