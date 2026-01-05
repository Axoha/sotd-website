function setButtonState(button, isActive){
    const name = button.dataset.name
    const state = isActive ? "Select" : ""

    button.src = `../../assets/home/Buttons/Top/${name}${state}${currentTheme}.png`
}

let currentTheme = "Pink"

const buttons = document.querySelectorAll(".navbtn")

buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        setButtonState(btn, true)
    })

    btn.addEventListener("mouseleave", () => {
        setButtonState(btn, false)
    })
})