import galleryItemsTpl from '../templates/gallery-items.hbs';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const refs = {
    gallery: document.querySelector('.gallery'),
    body: document.querySelector('body')
}

// -----Create DOM-elements in memory-----
// const galleryItemsRef = galleryItems.map(({ preview, original, description }) => `<div class="gallery">
//     <a class="gallery__item" href="${original}" onclick="return false;">
//         <img
//             class="gallery__image"
//             src="${preview}"
//             alt="${description}"
//         />
//     </a>
// </div>`).join("");


// -----Create DOM-elements in HTML-----
// refs.gallery.innerHTML = galleryItemsRef;
refs.gallery.innerHTML = galleryItemsTpl(galleryItems);



const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
    disableRightClick: true,
    overlayOpacity: 0.8,
});
