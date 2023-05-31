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
  submitObj.nextId = data.nextEntryId++;
  data.entries.unshift(submitObj);
  previewPhoto.setAttribute('src', '/images/placeholder-image-square.jpg');
  form.reset();
}

function renderEntry(entry) {
  // const ul = document.getElementById('#ulist');
  const li = document.createElement('li');
  const row = document.createElement('div');
  row.className = 'row';
  const colHalf = document.createElement('div');
  colHalf.className = 'column-half';
  const img = document.createElement('img');
  img.setAttribute('src', entry.photoURL);
  // ^ Could be data.entries.photoURL OR entry.$url
  const h3 = document.createElement('h3');
  const p = document.createElement('p');

  // ul.appendChild(li);
  li.appendChild(row);
  row.appendChild(colHalf);
  colHalf.appendChild(img);
  img.appendChild(h3);
  img.appendChild(p);
  // return ul;
  return li;
}
// continue here
if (renderEntry);
