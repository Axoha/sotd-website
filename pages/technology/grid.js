import { renderGrid, setupAlphabetFilter } from "/assets/javascript/wiki/renderGrid.js";

const overlay = document.getElementById("uiOverlay")
const filterBar = document.getElementById("filterBar")
const res = await fetch("./technology.index.json")
const machines = await res.json()
const options = {
    urlPrefix: "/pages/machines/index.html",
    thumbnailPath: "./thumbnails"
}

function render(list){
    renderGrid(overlay,list,options)
}

render(machines)
setupAlphabetFilter(filterBar, machines, render)