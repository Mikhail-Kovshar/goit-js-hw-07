import { galleryItems } from './gallery-items.js';
// Change code below this line






const gallery = document.querySelector(`.gallery`)
const galleryMarkup = createGalleryMarkup(galleryItems)
gallery.insertAdjacentHTML('beforeend',galleryMarkup)


function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" onclick="event.preventDefault()" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          
        />
      </a>
    </div>`;
    })
    .join('');
}

gallery.addEventListener(`click`, openModal)

function openModal(event) {
if (event.target.nodeName !== "IMG") return;

    const modal = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

modal.show()

     document.addEventListener("keydown", closeModal);

  function closeModal(event) {
  if (event.key === 'Escape') {
      modal.close();
    document.removeEventListener('keydown', closeModal);
    }
  }
    
    
}




