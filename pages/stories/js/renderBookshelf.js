const res = await fetch("./js/books.index.json") // this path is like this because this script is being ran on the file one level above idk man fml
let books = await res.json()

export function renderBooks(container, books) {
    container.innerHTML = ""

    books.forEach((book) => {
        const card = document.createElement("a")
        card.className = "bookCard"
        card.href = `book.html?bookId=${book.bookId}`
        
        card.innerHTML = `
        <img src ="${book.cover}">
        <h3>${book.title}</h3>
        `

        container.appendChild(card)
    })
}

const shelf = document.getElementById("bookShelf")

renderBooks(shelf, books)