import { renderEntry } from "/assets/javascript/wiki/renderEntry.js";
import { initCarousel } from "/assets/javascript/carousel.js";

const params = new URLSearchParams(window.location.search)
const entryId = params.get("id") || "peaShooter"

const res = await fetch("./nature.json")
const data = await res.json()

const entry = data[entryId]
if(!entry) {
    throw new Error("entry not found!")
}

renderEntry({entry, entryId, assetBasePath: "/pages/nature/entries/assets"})

initCarousel()