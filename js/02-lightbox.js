import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery")



galleryItems.forEach((item) => {
    const galleryItemEl = `
    <li>
        <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}"/>
        </a>
    </li>`

    galleryEl.insertAdjacentHTML("beforeend", galleryItemEl)
console.log(galleryItemEl)
})

let galleryTEST = new SimpleLightbox('.gallery a', { captionDelay : 250 });
gallery.on('show.simplelightbox', function () {
});

// galleryEl.addEventListener("click", (event) => {
//     event.preventDefault()
//     const lightbox = new SimpleLightBox('.gallery', { captionDelay : 250 })
// })



