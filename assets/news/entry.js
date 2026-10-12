import { applyGlobalTheme } from "/assets/javascript/theme/theme.js"
import { formatDate } from "/assets/javascript/parseTime.js"
import { loadUpdates } from "/assets/javascript/updates.js"
import { marked } from "https://cdn.jsdelivr.net/npm/marked@12.0.2/lib/marked.esm.js"

const ENTRY_DIR = "/assets/news/newsAssets/entries/" // where the .md files live

const uiContent = document.querySelector(".uiContent")
const id = new URLSearchParams(location.search).get("id")
const news = await (await fetch("/assets/news/news.index.json")).json()
const entry = news.find((e) => e.id === id)

if (!entry) {
    const msg = document.createElement("p")
    msg.textContent = "Couldn't find that entry."
    uiContent.appendChild(msg)
} else {
    const title = document.createElement("h1")
    const date = document.createElement("p")
    const body = document.createElement("div")
    title.className = "entryTitle"
    title.innerHTML = entry.title
    date.className = "entryDate"
    date.textContent = formatDate(entry.publishTime)
    body.className = "entryBody"

    let md = entry.body
    try {
        const r = await fetch(ENTRY_DIR + entry.file)
        if (r.ok) md = await r.text()
    } catch {}
    body.innerHTML = marked.parse(md)

    uiContent.append(title, date, body)
    document.title = `${entry.title} - SOTD`
}

loadUpdates()
applyGlobalTheme(localStorage.getItem("theme"))