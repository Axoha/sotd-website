import { initNavBarHover } from "/assets/javascript/theme/theme.js";
//data rendering stuff below
const params = new URLSearchParams(window.location.search);
const characterId = params.get("id") || "ferdRay";

async function loadCharacters(){
    const res = await fetch("./cast.json")
    return res.json()
}

const data = await loadCharacters()
const character = data[characterId]
const characterTitle = document.getElementById("characterTitle")

document.getElementById("characterName").textContent = character.name;
characterTitle.textContent = character.title;
characterTitle.style.marginTop = "3%"

document.title = `${character.name} - SOTD`

const boxOne = document.getElementById("boxOne")

for (const [key, value] of Object.entries(character.blockOne)){
    const p  = document.createElement("p")
    p.style.marginBottom = '0px'
    p.innerHTML= `${key}: ${value}`
    boxOne.appendChild(p)
}

const track = document.getElementById("carouselTrack")
character.images.forEach(img => {
    const slide = document.createElement("div")
    slide.className = "slide"

    slide.innerHTML = `
        <img src="./assets/${characterId}/${img.file}">
        <h2 class="titleText imageTitle">${img.title}</h2>
    `
    track.appendChild(slide)
})

const boxTwo = document.getElementById("boxTwo")

character.blockTwo.forEach(section => {
    const h2 = document.createElement("h2")
    h2.textContent = section.heading
    boxTwo.appendChild(h2)
    boxTwo.appendChild(document.createElement("hr"))

    if (section.paragraphs) {
        section.paragraphs.forEach((text)=>{
            const p = document.createElement("p")
            p.innerHTML = text
            boxTwo.appendChild(p)
        })
    }

    if (section.listItems) {
        const ul = document.createElement("ul")
        section.listItems.forEach(item => {
            const li = document.createElement("li")
            li.textContent = item
            ul.appendChild(li)
        })
        boxTwo.appendChild(ul)
    }
})

//carousel stuff below

const slides = track.children
const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")

let index = 0

function updateCarousel() {
    if (slides.length === 0) return;
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

initNavBarHover()