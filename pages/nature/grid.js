import { renderGrid, setupAlphabetFilter } from "/assets/javascript/wiki/renderGrid.js"

const container = document.getElementById("uiOverlay")
const res = await fetch("./nature.index.json")
let entries = await res.json()
const options = {
    urlPrefix: `/pages/nature/entries/index.html`,
    thumbnailPath: `./thumbnails`
}
function render(list){
renderGrid(container, list, options)
}

render(entries)

setupAlphabetFilter(container, entries, render)