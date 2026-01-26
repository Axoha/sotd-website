const chapterTitleEl = document.getElementById("chapterTitle")
const chapterNumberEl = document.getElementById("chapterNumber")
const chapterTextEl = document.getElementById("chapterText");
const prevChapterEl = document.getElementById("prevChapter");
const nextChapterEl = document.getElementById("nextChapter");

const params = new URLSearchParams(window.location.search);
const bookId = params.get("bookId");
const chapterId = params.get("chapterId");

if (!bookId || !chapterId) {
    throw new Error("Missing book or chapter ID")
}

const bookRes = await fetch(`./books/${bookId}/book.json`)
const bookInfo = await bookRes.json()

const chapterInfo = bookInfo.chapters.find(ch => ch.chapterId === chapterId)
if (!chapterInfo) {
    throw new Error("Chapter not found")
}

chapterTitleEl.textContent = chapterInfo.title;
chapterNumberEl.textContent = `${chapterInfo.designation}`;

const mdRes = await fetch(`/pages/stories/books/${bookId}/chapters/${chapterInfo.file}`)
const mdText = await mdRes.text()

chapterTextEl.innerHTML = window.marked.parse(mdText)

const currentIndex = bookInfo.chapters.findIndex(ch => ch.chapterId === chapterId)

if (currentIndex > 0) {
    const prev = bookInfo.chapters[currentIndex-1]
    prevChapterEl.href= `./chapter.html?bookId=${bookId}&chapterId=${prev.chapterId}`
} else {
    prevChapterEl.style.visibility = "hidden"
}


if (currentIndex < bookInfo.chapters.length - 1){
    const next = bookInfo.chapters[currentIndex + 1]
    nextChapterEl.href = `./chapter.html?bookId=${bookId}&chapterId=${next.chapterId}`
} else {
    nextChapterEl.style.visibility = "hidden"
}