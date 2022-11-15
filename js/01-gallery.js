import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refs = {
  galleryContainer: document.querySelector(`.gallery`),
  galleryMarkup: createGalleryMarkup(galleryItems),
};

refs.galleryContainer.insertAdjacentHTML("afterbegin", refs.galleryMarkup);

refs.galleryContainer.addEventListener(`click`, onImgGalleryContainerClick);

// ======================================== Create Markup =====================================
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
// ======================================== event on Click of Img Gallery =========================
function onImgGalleryContainerClick(evt) {
  evt.preventDefault();

  const isGalleryAnchorEl = evt.target.classList.contains(`gallery__image`);

  if (!isGalleryAnchorEl) {
    return;
  }

  const originalImgRef = evt.target.dataset.source;

  const onModalClosePress = (evt) => {
    if (evt.code === `Escape`) {
      createOrgImgModal.close();
    }
  };

  const createOrgImgModal = basicLightbox.create(
    `
    <img src= ${originalImgRef}>`,
    {
      onShow: () => {
        window.addEventListener("keydown", onModalClosePress);
      },
      onClose: () => {
        window.removeEventListener(`keydown`, onModalClosePress);
      },
    }
  );
  createOrgImgModal.show();
}
