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
  const submitObj = {
    $title: form.elements.title.value,
    $url: form.elements.url.value,
    $notes: form.elements.notes.value
  };
  submitObj.entryId = data.nextEntryId++;
  data.entries.unshift(submitObj);
  ul.prepend(renderEntry(submitObj));
  viewSwap('entries');
  toggleNoEntries();
  previewPhoto.setAttribute('src', '/images/placeholder-image-square.jpg');
});

function renderEntry(entry) {
  const li = document.createElement('li');
  li.className = 'row';
  li.setAttribute('data-entry-id', entry.entryId);
  const colHalf1 = document.createElement('div');
  colHalf1.className = 'column-half img';
  const colHalf2 = document.createElement('div');
  colHalf2.className = 'column-half text';
  const img = document.createElement('img');
  img.setAttribute('src', entry.$url);
  const h3 = document.createElement('h3');
  h3.textContent = entry.$title;
  const pencil = document.createElement('i');
  pencil.className = 'fa-solid fa-pencil fa-sm';
  const p = document.createElement('p');
  p.textContent = entry.$notes;
  li.appendChild(colHalf1);
  colHalf1.appendChild(img);
  li.appendChild(colHalf2);
  colHalf2.appendChild(h3);
  h3.appendChild(pencil);
  colHalf2.appendChild(p);
  return li;
}

const ul = document.querySelector('ul');
document.addEventListener('DOMContentLoaded', function (event) {
  for (let i = 0; i < data.entries.length; i++) {
    const result = renderEntry(data.entries[i]);
    ul.append(result);
    viewSwap(data.view);
  }
  if (data.entries.length !== 0) {
    toggleNoEntries();
  }
});

function toggleNoEntries() {
  const noEntry = document.querySelector('#no-entry');
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

// const icon = document.querySelectorAll('.fa-solid');
ul.addEventListener('click', function (event) {
  if (!event.target.matches('.fa-solid')) {
    return;
  }
  viewSwap('entry-form');
  for (let i = 0; i < data.entries.length; i++) {
    // console.log(event.target.closest('li').getAttribute('data-entry-id'));
    if (data.entries[i].entryId === Number(event.target.closest('li').getAttribute('data-entry-id'))) {
      data.editing = data.entries[i];
      const prePopulate = {
        $t: data.editing.$title,
        $u: data.editing.$url,
        $n: data.editing.$notes
      };
      const getTitle = document.querySelector('#title');
      getTitle.setAttribute('value', prePopulate.$t);
      const getPhoto = document.querySelector('#url');
      getPhoto.setAttribute('value', prePopulate.$u);
      previewPhoto.setAttribute('src', prePopulate.$u);
      const getNote = document.querySelector('#notes');
      getNote.innerHTML = prePopulate.$n;
    }
  }
  document.querySelector('#formTitle').innerHTML = 'Edit Entry';
});
