const KEY = '43875376-ffcf8bec5b4985f5e1efc350d';

export function pictureRequest(request) {
  return fetch(
    `https://pixabay.com/api/?key=${KEY}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true&per_page=200`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response;
  });
}
