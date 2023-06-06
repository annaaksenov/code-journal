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
  const li = document.createElement('li');
  li.className = 'row';
  const colHalf1 = document.createElement('div');
  colHalf1.className = 'column-half img';
  const colHalf2 = document.createElement('div');
  colHalf2.className = 'column-half text';
  const img = document.createElement('img');
  img.setAttribute('src', entry.$url);
  const h3 = document.createElement('h3');
  h3.textContent = entry.$title;
  const p = document.createElement('p');
  p.textContent = entry.$notes;
  li.appendChild(colHalf1);
  colHalf1.appendChild(img);
  li.appendChild(colHalf2);
  colHalf2.appendChild(h3);
  colHalf2.appendChild(p);
  return li;
}

const ul = document.querySelector('ul');
const renderDOM = document.addEventListener('DOMContentLoaded', function (event) {
  for (let i = 0; i < data.entries.length; i++) {
    const result = renderEntry(data.entries[i]);
    ul.append(result);
  }
});
renderDOM();
// Need to remove later ^

function toggleNoEntries() {
  const noEntry = document.querySelector('.center');
  noEntry.classList.toggle('hidden');
}
toggleNoEntries();

function viewSwap(view) {
  if (view === 'entries') {
    data.view = 'entries';
    return ul;
  } else if (view === 'entry-form') {
    data.view = 'entry-form';
    return form;
  }
}
viewSwap();
// need to remove later ^
