    export function renderGrid(container, list, options){
        container.querySelectorAll(".entryCard").forEach((c)=> c.remove())
        const { urlPrefix = "", thumbnailPath  = ""} = options

        list.forEach(item => {
            const card = document.createElement("a")
            card.className = "entryCard" //should be changed to something generic? fml
            card.href = `${urlPrefix}?id=${item.id}`

            card.innerHTML = `
            <img src="${thumbnailPath}/${item.thumbnail}">
            <div class="sideContent">
                <h3>${item.name}</h3>
                <p>${item.flavorText || ""}</p>
            </div>
            `

            container.appendChild(card)
        })
    }

    export function setupAlphabetFilter(filterContainer, list, renderFn) {
        const spans = filterContainer.querySelectorAll("[data-letter]")

        spans.forEach(span => {
            span.addEventListener("click", () => {
                spans.forEach(s => s.classList.remove("active"))
                span.classList.add("active")

                const letter = span.dataset.letter
                if (letter === "#") {
                    renderFn(list)
                } else {
                    const filtered = list.filter(item => item.name.charAt(0).toUpperCase() === letter)
                    renderFn(filtered)
                }
            })
        })
    }