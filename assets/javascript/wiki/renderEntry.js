export function renderEntry({
    entry,
    entryId,
    assetBasePath
}){
    //box one stuff
    document.getElementById("entryName").textContent = entry.name

    const titleEl = document.getElementById("entryTitle")
    titleEl.textContent = entry.title

    document.title = `${entry.name} - SOTD`

    const boxOne = document.getElementById("boxOne")
    boxOne.innerHTML = ""

    for (const [key, value] of Object.entries(entry.blockOne)) {
        const p = document.createElement("p")
        p.style.marginBottom = "0px" //ditto
        p.innerHTML = `<b>${key}</b>: <i>${value}</i>`
        boxOne.appendChild(p)
    }

    //carousel stuff
    const track = document.getElementById("carouselTrack")
    track.innerHTML = ""

    entry.images.forEach(img => {
        const slide = document.createElement("div")
        slide.className = "slide"

        slide.innerHTML = `
        <img src="${assetBasePath}/${entryId}/${img.file}">
        <h2 class="titleText imageTitle">${img.title || ""}</h2>
        <p class="titleText imageCredits">${img.credits || ""}</p>
        `

        track.appendChild(slide)
    })

    //block two stuff
    const boxTwo = document.getElementById("boxTwo")
    boxTwo.innerHTML = ""

    entry.blockTwo.forEach(section => {
        const h2 = document.createElement("h2")
        h2.textContent = section.heading
        boxTwo.appendChild(h2)
        boxTwo.appendChild(document.createElement("hr"))

        if (section.paragraphs) {
            section.paragraphs.forEach(text=>{
                const p = document.createElement("p")
                p.innerHTML = text
                boxTwo.appendChild(p)
            })
        }

        if (section.listItems) {
            const ul = document.createElement("ul")
            section.listItems.forEach(item => {
                const li = document.createElement("li")
                li.innerHTML = item
                ul.appendChild(li)
            })
            boxTwo.append(ul)
        }
    })
}