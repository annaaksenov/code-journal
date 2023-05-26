const form = document.querySelector('form');
const photoURL = document.querySelector('.photo-url');
const previewPhoto = document.querySelector('img');
photoURL.addEventListener('input', handleInput);
function handleInput(event) {
  const urlObj = {
    $url: form.elements.url.value
  };
  previewPhoto.setAttribute('src', urlObj.$url);
}

const sub = document.querySelector('.submit');
sub.addEventListener('click', handleClick);
function handleClick(event) {
  event.preventDefault();
  const submitObj = {
    $title: form.elements.title.value,
    $url: form.elements.url.value,
    $notes: form.elements.notes.value
  };
  const nextId = data.nextEntryId;
  submitObj.entryId = nextId;
  data.nextEntryId++;
  data.entries.unshift(submitObj);
  // may be reason for future hiccups ^
  previewPhoto.setAttribute('src', '/images/placeholder-image-square.jpg');
  form.reset();
}
