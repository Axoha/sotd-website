const grid = document.getElementById("castGrid")

const res = await fetch("./cast.index.json")
const characters = await res.json()

characters.forEach(char => {
    const card = document.createElement("a")
    card.className = "castCard"
    card.href = `/pages/cast/characters/index.html?id=${char.id}`

    card.innerHTML = `
    <img src="./thumbnails/${char.thumbnail}">
    <h3>${char.name}</h3>
    `

    grid.appendChild(card)
})