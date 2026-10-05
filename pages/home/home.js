import { applyGlobalTheme } from "/assets/javascript/theme/theme.js"
import { timeAgo } from "/assets/javascript/timeAgo.js"
import { parseTime } from "/assets/javascript/parseTime.js"
import { loadUpdates } from "/assets/javascript/updates.js"

const MAX_ARTICLES = 4

const res = await fetch("/assets/news/news.index.json")
const news = await res.json()
const uiContent = document.querySelector(".uiContent")

// newest publishTime first (missing/empty times count as oldest), then keep only the latest 4
const latest = [...news]
    .sort((a, b) => parseTime(b.publishTime) - parseTime(a.publishTime))
    .slice(0, MAX_ARTICLES)

latest.forEach((article) => {
    const articleDiv = document.createElement("div")
    const articleLink = document.createElement("a")
    const notifier = document.createElement("img")
    const title = document.createElement("h2")
    const body = document.createElement("p")
    const timeAgoEl = document.createElement("p")

    articleDiv.className = "article"

    articleLink.href = `./news/entry?id=${article.id}`
    articleLink.className = "articleLink"

    notifier.className = `${article.boxType.toLowerCase()} notifier`
    notifier.dataset.box = article.boxType

    title.innerHTML = article.title
    title.className = "articleTitle"
    body.innerHTML = article.body
    body.className = "articleBody"

    timeAgoEl.className = "timeAgo"
    if (article.publishTime) timeAgoEl.textContent = `Published ${timeAgo(String(parseTime(article.publishTime)))}`

    const thumbnail = document.createElement("img")
    thumbnail.className = "thumbnail"
    thumbnail.src = `/assets/news/newsAssets/thumbnails/${article.thumbnail}`

    articleDiv.appendChild(articleLink)
    articleLink.appendChild(notifier)
    articleLink.appendChild(thumbnail)
    articleLink.appendChild(title)
    articleLink.appendChild(body)
    articleLink.appendChild(timeAgoEl)

    uiContent.appendChild(articleDiv)
})

loadUpdates()

applyGlobalTheme(localStorage.getItem("theme"))