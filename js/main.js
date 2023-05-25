const form = document.querySelector('form');
const photoURL = document.querySelector('.photo-url');
const previewPhoto = document.querySelector('img');

function handleInput(event) {
  const obj = {
    $url: form.elements.url.value
  };
  previewPhoto.setAttribute('src', obj.$url);
}
photoURL.addEventListener('input', handleInput);
