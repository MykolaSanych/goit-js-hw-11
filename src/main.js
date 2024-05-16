import { pictureRequest } from './js/pixabay-api.js';
import { render } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
const inputSearch = document.querySelector('.input-search');
const KEY = '43875376-ffcf8bec5b4985f5e1efc350d';

document.querySelector('.button-search').addEventListener('click', klickSearch);
function klickSearch() {
  pictureRequest(KEY, inputSearch.value).then(images => {
    const arr = images.hits;
    if (arr.length > 0) {
      render(arr);
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

const listFoto = document.querySelector('.list-foto');
listFoto.addEventListener('click', clickOnImage);

function clickOnImage(event) {
  event.preventDefault();
  let gallery = new SimpleLightbox('.list-foto a');
}
