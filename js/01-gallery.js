import { galleryItems } from './gallery-items.js';
// Change code below this line
//import * as basicLightbox from 'basiclightbox'

const galleryEl = document.querySelector('.gallery');

function newGallery(image)  {
    return image
    .map (({preview, original, description}) =>{
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    })
    .join('');
}

galleryEl.insertAdjacentHTML("beforeend", newGallery(galleryItems));



document.querySelectorAll('.gallery__link').forEach(link => {
    link.addEventListener('click', (event)=>{
        const instance = basicLightbox.create(`<img src="${link.href}">`)
    
        instance.show()
    
        event.preventDefault();
    })
})

console.log(galleryItems);
