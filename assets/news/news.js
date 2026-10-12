import { applyGlobalTheme } from "/assets/javascript/theme/theme.js"
import { parseTime, formatDate } from "/assets/javascript/parseTime.js"
import { loadUpdates } from "/assets/javascript/updates.js"

const res = await fetch("/assets/news/news.index.json")
const news = await res.json()
const uiContent = document.querySelector(".uiContent")

;[...news]
    .sort((a, b) => parseTime(b.publishTime) - parseTime(a.publishTime))
    .forEach((entry) => {
        const link = document.createElement("a")
        const thumb = document.createElement("img")
        const text = document.createElement("div")
        const title = document.createElement("div")
        const body = document.createElement("p")
        const date = document.createElement("p")

        link.className = "newsEntry"
        link.href = `/pages/news/entry/?id=${entry.id}`

        thumb.className = "newsThumb"
        thumb.src = `/assets/news/newsAssets/thumbnails/${entry.thumbnail}`

        text.className = "newsText"
        title.className = "newsTitle"
        title.innerHTML = entry.title
        body.className = "newsBody"
        body.innerHTML = entry.body
        date.className = "newsDate"
        date.textContent = formatDate(entry.publishTime)

        text.append(title, body, date)
        link.append(thumb, text)
        uiContent.appendChild(link)
    })

loadUpdates()
applyGlobalTheme(localStorage.getItem("theme"))