export function pictureRequest(key, request) {
  const loader = document.querySelector('.loader');
  loader.classList.remove('hiden');
  return fetch(
    `https://pixabay.com/api/?key=${key}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (response.status === 200) {
        loader.classList.add('hiden');
        return response.json();
      }
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
}
