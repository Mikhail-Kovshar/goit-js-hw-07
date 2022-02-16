import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallery = document.querySelector(`.gallery`)
const galleryMarkup = createGalleryMarkup(galleryItems)
gallery.insertAdjacentHTML('beforeend',galleryMarkup)


function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
       <a class="gallery__item" onclick="event.preventDefault()" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
     </a>`
                ;
        })
        .join('');

}
const galleryOptions = {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
    
};

const lightbox = new SimpleLightbox(".gallery a", galleryOptions);
































console.log(galleryItems);
