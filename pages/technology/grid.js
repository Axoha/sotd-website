import { renderGrid, setupAlphabetFilter } from "/assets/javascript/wiki/renderGrid.js";

const overlay = document.getElementById("uiOverlay")
const filterBar = document.getElementById("filterBar")
const res = await fetch("./technology.index.json")
const machines = await res.json()
const options = {
    urlPrefix: "/pages/technology/machines/index.html",
    thumbnailPath: "./thumbnails"
}

function render(list){
    renderGrid(overlay,list,options)
}

const sortedMachines = [...machines].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
)

render(sortedMachines)
setupAlphabetFilter(filterBar, sortedMachines, render)