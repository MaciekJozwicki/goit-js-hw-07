import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery")



galleryItems.forEach((item) => {
    const galleryItemEl = `
    <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            />
        </a>
    </div>`

    galleryEl.insertAdjacentHTML("beforeend", galleryItemEl)

})

galleryEl.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("tak")
})












console.log();
