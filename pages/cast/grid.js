import { renderGrid, setupAlphabetFilter } from "/assets/javascript/wiki/renderGrid.js"

const container = document.getElementById("uiOverlay")
const res = await fetch("./cast.index.json")
let characters = await res.json()
const options = {
    urlPrefix: `/pages/cast/characters/index.html`,
    thumbnailPath: `./thumbnails`
}
function render(list){
renderGrid(container, list, options)
}

render(characters)

setupAlphabetFilter(container, characters, render)