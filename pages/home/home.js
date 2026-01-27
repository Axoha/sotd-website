import { applyGlobalTheme } from "/assets/javascript/theme/theme.js"
import { timeAgo } from "/assets/javascript/timeAgo.js"

const res = await fetch("/assets/news/news.index.json")
const news = await res.json()
const uiContent = document.querySelector(".uiContent")

//fuckcing making thhe fucking thingy fucking have two divs so II cann make the thingy the backgroundd an have the other thingy on top of it
news.forEach((article)=>{
    const articleDiv = document.createElement("div")
    const articleLink = document.createElement("a")
    const innerDiv = document.createElement("div")
    const notifier = document.createElement("img")
    const title = document.createElement("h2")
    const body = document.createElement("p")
    const timeAgoEl = document.createElement("p")

    innerDiv.className = "articleContent"
    articleDiv.className = "article"

    articleLink.href = `./news/entry?id${article.id}`
    articleLink.className = "articleLink"
    
    notifier.className = `${article.boxType.toLowerCase()} notifier`
    notifier.dataset.box = article.boxType

    title.innerHTML = article.title
    title.className = "articleTitle"
    body.innerHTML = article.body
    body.className = "articleBody"

    timeAgoEl.className = "timeAgo"
    timeAgoEl.textContent = `Published ${timeAgo(article.publishTime)}`

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

applyGlobalTheme(localStorage.getItem("theme"))