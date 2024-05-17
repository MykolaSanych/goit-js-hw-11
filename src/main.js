import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { pictureRequest } from './js/pixabay-api.js';
import { render } from './js/render-functions.js';

let gallery = new SimpleLightbox('.list-foto a');
const inputSearch = document.querySelector('.input-search');
const loader = document.querySelector('.loader');

document.querySelector('.input').addEventListener('submit', submitInput);

function submitInput(event) {
  event.preventDefault();
  const listFoto = document.querySelector('.list-foto');
  listFoto.innerHTML = '<ul class="list-foto">';
  const queryWord = inputSearch.value.trim();
  if (queryWord.length < 3) {
    return iziToast.error({
      position: 'topRight',
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }

  loader.classList.remove('hiden');
  pictureRequest(queryWord)
    .then(response => {
      if (response.status === 200) {
        loader.classList.add('hiden');
      }
      return response.json();
    })

    .then(images => {
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
    })

    .catch(error => {
      console.log(error);
      throw error;
    });
}
