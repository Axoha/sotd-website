const overlay = document.getElementById("uiOverlay")
const filterBar = document.getElementById("filterBar")

const res = await fetch("./cast.index.json")
const characters = await res.json()

let allCharacters = [...characters]

function renderCharacters(list) {
    overlay.querySelectorAll(".castCard").forEach(c => c.remove())

    list.forEach(char => {
        const card = document.createElement("a")
        card.className = "castCard"
        card.href = `/pages/cast/characters/index.html?id=${char.id}`

        card.innerHTML = `
    <img src="./thumbnails/${char.thumbnail}">
    <div class="sideContent">
    <h3>${char.name}</h3>
    <p>${char.flavorText}</p>
    </div>
    `

        overlay.appendChild(card)
    })
}

renderCharacters(allCharacters)

filterBar.addEventListener("click", e => {
    const letter = e.target.dataset.letter
    if (!letter) return

    filterBar.querySelectorAll("span").forEach(s => s.classList.remove("active"))
    e.target.classList.add("active")

    if (letter === "#") {
        renderCharacters(allCharacters)
    } else {
        const filtered = allCharacters.filter(c => 
            c.name.charAt(0).toUpperCase() === letter
        )
        renderCharacters(filtered)
    }
})