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

const sortedEntries = [...entries].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
)

render(sortedEntries)

setupAlphabetFilter(container, sortedEntries, render)