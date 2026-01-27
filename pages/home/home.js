import { applyGlobalTheme } from "/assets/javascript/theme/theme.js"

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

    const thumbnail = document.createElement("img")
    thumbnail.className = "thumbnail"
    thumbnail.src = `/assets/news/${article.thumbnail}`
    
    articleDiv.appendChild(articleLink)
    articleLink.appendChild(notifier)
    articleLink.appendChild(thumbnail)
    articleLink.appendChild(title)
    articleLink.appendChild(body)

    uiContent.appendChild(articleDiv)
})

applyGlobalTheme(localStorage.getItem("theme"))