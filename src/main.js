import { pictureRequest } from '/js/pixabay-api.js';
import { render } from '/js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
let gallery = new SimpleLightbox('.list-foto a');
const inputSearch = document.querySelector('.input-search');
const KEY = '43875376-ffcf8bec5b4985f5e1efc350d';

document.querySelector('.input').addEventListener('submit', submitInput);
function submitInput() {
  pictureRequest(KEY, inputSearch.value).then(images => {
    const arr = images.hits;
    if (arr.length > 0) {
      render(arr);
      gallery.refresh();
    } else {
      iziToast.error({
        position: 'topRight',
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }
  });
}
