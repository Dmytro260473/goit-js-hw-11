import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { showLoader, hideLoader } from "./loader";

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
  
export function renderImages(images, gallery) {
    showLoader();
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      return `
        <li class="gallery-item">
          <a href="${largeImageURL}" class="gallery-link">
            <img src="${webformatURL}" alt="${tags}" class="gallery-image" />
          </a>
          <div class="image-info">
            <div class="image-info-item"><span><b>Likes</b></span><span>${likes}</span></div>
            <div class="image-info-item"><span><b>Views</b></span><span>${views}</span></div>
            <div class="image-info-item"><span><b>Comments</b></span><span>${comments}</span></div>
            <div class="image-info-item"><span><b>Downloads</b></span><span>${downloads}</span></div>
          </div>
        </li>
      `;
    }).join('');
  
    gallery.insertAdjacentHTML('beforeend', markup);
    hideLoader();
    lightbox.refresh();
  }
  
  export function clearGallery(gallery) {
    gallery.innerHTML = '';
  }