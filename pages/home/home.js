function setButtonState(button, isActive){
    const name = button.dataset.name
    const state = isActive ? "Select" : ""

    button.src = `../../assets/home/Buttons/Top/${currentTheme}/${name}${currentTheme}${state}.png`
}

let currentTheme = "Pink"
let currentBackground = "LoveCity"

const logo = document.getElementById("logo")
const homeUi = document.getElementById("homeui")
const buttons = document.querySelectorAll(".navbtn")
const secretButtons = document.getElementById("secretButtons") 

secretButtons.src = `/assets/home/Buttons/BottomSecret/SecretButtonRow${currentTheme}.png`
logo.src = `../../assets/home/Logo/Logo${currentTheme}.png`
homeUi.src = `../../assets/home/HomePage/Home${currentTheme}.png`
document.body.style.backgroundImage = `url(../../assets/home/ChosenBackgrounds/${currentBackground}.png)`

buttons.forEach(btn => {
    //initially sets each button to have the correct theme color
    btn.src = `../../assets/home/Buttons/Top/${currentTheme}/${btn.dataset.name}${currentTheme}.png`

    btn.addEventListener("mouseenter", () => {
        setButtonState(btn, true)
    })

    btn.addEventListener("mouseleave", () => {
        setButtonState(btn, false)
    })
})