import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(`.gallery`);

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryContainer.addEventListener(`click`, onImgGalleryContainerClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join(" ");
}

function onImgGalleryContainerClick(evt) {
  evt.preventDefault();
  const isGalleryAnchorEl = evt.target.classList.contains(`gallery__image`);

  if (!isGalleryAnchorEl) {
    return;
  }

  // console.log(evt.target.dataset);
}

function createModalWindow() {
  basicLightbox.create(``);
}
