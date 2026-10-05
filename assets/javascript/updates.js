import { parseTime } from "/assets/javascript/parseTime.js"
import { timeAgo } from "/assets/javascript/timeAgo.js"

const GITHUB_URL = "https://github.com/Axoha/sotd-website"
const MAX_UPDATES = 8

// Random image shown in the sidebar's black space (233 x 135). Put the files in /assets/sidebarImages/
const SIDEBAR_IMAGES = ["screennoisebumper.gif", "inkabumper.png"]
 
// Call loadUpdates() on any page with a .ui container. Edit /assets/news/updates.json to change the text.
export async function loadUpdates() {
    const res = await fetch("/assets/news/updates.json")
    const updates = await res.json()
 
    const box = document.createElement("div")
    const list = document.createElement("ul")
    box.className = "updates"
    list.className = "updateList"
 
    updates
        .sort((a, b) => parseTime(b.publishTime) - parseTime(a.publishTime))
        .slice(0, MAX_UPDATES)
        .forEach((u) => {
            const li = document.createElement("li")
            const text = document.createElement("span")
            const date = document.createElement("span")
            text.className = "updateText"
            text.innerHTML = u.text
            date.className = "updateDate"
            date.textContent = timeAgo(String(parseTime(u.publishTime)))
            li.append(text, date)
            list.appendChild(li)
        })
 
    const more = document.createElement("a")
    more.className = "updateMore"
    more.href = GITHUB_URL
    more.textContent = "More..."
 
    box.append(list, more)
    const ui = document.querySelector(".ui")
    const pic = document.createElement("img")
    pic.className = "sidebarImage"
    pic.src = `/assets/sidebarImages/${SIDEBAR_IMAGES[Math.floor(Math.random() * SIDEBAR_IMAGES.length)]}`
    ui.append(pic, box)
}
