const params = new URLSearchParams(window.location.search)
const bookId = params.get("bookId")

// if (!bookId) {
//     throw new Error //handle this better, maybe have an error page like the WIP page
// }

const res = await fetch(`./books/${bookId}/book.json`)
const book = await res.json()

const tableOfContents = document.getElementById("tableOfContents")
const bookCover = document.getElementById("bookCover")
const bookTitle = document.getElementById("bookTitle")
const synopsis = document.getElementById("synopsis")

bookTitle.textContent = book.title
synopsis.innerHTML = book.synopsis
bookCover.src = `./books/${book.bookId}/${book.cover}`

book.chapters.forEach((chapter)=> {
    const a = document.createElement("a")
    a.href = `./chapter.html?bookId=${bookId}&chapterId=${chapter.chapterId}`
    a.textContent = `Chapter ${chapter.number}: ${chapter.title}`
    a.className = "chapterLink"
    tableOfContents.appendChild(a)
    tableOfContents.appendChild(document.createElement("br"))
})