import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from "./js/pixabay-api";
import { clearGallery, renderImages } from './js/render-functions';
import { showLoader, hideLoader } from './js/loader';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const query = form.elements['search-text'].value.trim();
    if (!query) return;

    clearGallery(gallery);
    showLoader();

    getImagesByQuery(query)
        .then(function (data) {
            hideLoader();
            if (data.hits.length === 0) {
                iziToast.warning({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
                return;
            }
            renderImages(data.hits, gallery);
        })
        .catch(function () {
            hideLoader();
            iziToast.error({
                message: 'Error!',
                position: 'topRight',
            });
        });
});
