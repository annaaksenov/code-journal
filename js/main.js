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
sub.addEventListener('click', function () {
  /** handleClick);
function handleClick(event) {
  event.preventDefault(); */
  const submitObj = {
    $title: form.elements.title.value,
    $url: form.elements.url.value,
    $notes: form.elements.notes.value
  };
  submitObj.nextId = data.nextEntryId++;
  data.entries.unshift(submitObj);
  ul.prepend(renderEntry());
  viewSwap('entries');
  toggleNoEntries();
  previewPhoto.setAttribute('src', '/images/placeholder-image-square.jpg');
});

function renderEntry(entry) {
  const li = document.createElement('li');
  li.className = 'row';
  const colHalf1 = document.createElement('div');
  colHalf1.className = 'column-half img';
  const colHalf2 = document.createElement('div');
  colHalf2.className = 'column-half text';
  const img = document.createElement('img');
  img.setAttribute('src', entry.$url);
  // Causing issues ^
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
// const renderDOM =
document.addEventListener('DOMContentLoaded', function (event) {
  for (let i = 0; i < data.entries.length; i++) {
    const result = renderEntry(data.entries[i]);
    ul.append(result);
  }
});

function toggleNoEntries() {
  const noEntry = document.querySelector('.center');
  noEntry.classList.toggle('hidden');
}

const entForm = document.querySelector('div[data-view="entry-form"]');
const ent = document.querySelector('div[data-view="entries"]');

function viewSwap(view) {
  data.view = view;
  if (view === 'entries') {
    entForm.classList.add('hidden');
    ent.classList.remove('hidden');
  } else if (view === 'entry-form') {
    entForm.classList.remove('hidden');
    ent.classList.add('hidden');
  }
}
const a = document.querySelector('a');
a.addEventListener('click', function () {
  viewSwap('entries');
});

const newEntryBtn = document.querySelector('.new');
newEntryBtn.addEventListener('click', function () {
  viewSwap('entry-form');
});
