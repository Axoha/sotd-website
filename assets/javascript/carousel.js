export function initCarousel({
    trackId = "carouselTrack",
    prevId = "prev",
    nextId = "next"
} = {}){
    const track = document.getElementById(trackId)
    const slides = Array.from(track.children)

    const prevBtn = document.getElementById(prevId)
    const nextBtn = document.getElementById(nextId)

    if (slides.length <=1) {
        prevBtn?.remove()
        nextBtn?.remove()

        track.style.transform = "none"
        track.dataset.mode = "static"
        
        return
    }

    let index = 0

    function update() {
        if (!slides.length) return
        track.style.transform = `translateX(-${index * 100}%)`
    }

    nextBtn?.addEventListener("click", () => {
        index = (index + 1) % slides.length
        update()
    })

    prevBtn?.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length
        update()
    })

    update()
}