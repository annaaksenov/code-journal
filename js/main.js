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

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const submitObj = {
    $title: form.elements.title.value,
    $url: form.elements.url.value,
    $notes: form.elements.notes.value
  };
  if (data.editing === null) {
    submitObj.entryId = data.nextEntryId++;
    data.entries.unshift(submitObj);
    ul.prepend(renderEntry(submitObj));
  }
  if (data.editing !== null) {
    const updatedForm = {
      $title: form.elements.title.value,
      $url: form.elements.url.value,
      $notes: form.elements.notes.value
    };
    updatedForm.entryId = data.editing.entryId;
    const li = document.querySelectorAll('li');
    for (let i = 0; i < data.entries.length; i++) {
      if (data.editing.entryId === data.entries[i].entryId) {
        data.entries[i] = updatedForm;
        li[i].replaceWith(renderEntry(updatedForm));
        data.editing = null;
        break;
      }
    }
  }
  data.editing = null;
  resetForm();
  viewSwap('entries');
  toggleNoEntries();
});

function resetForm() {
  form.reset();
  previewPhoto.setAttribute('src', '/images/placeholder-image-square.jpg');
  document.querySelector('#formTitle').innerHTML = 'New Entry';
}

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
  noEntry.classList.add('hidden');
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
  resetForm();
  viewSwap('entry-form');
});

ul.addEventListener('click', function (event) {
  if (!event.target.matches('.fa-solid')) {
    return;
  }
  viewSwap('entry-form');
  for (let i = 0; i < data.entries.length; i++) {
    if (data.entries[i].entryId === Number(event.target.closest('li').getAttribute('data-entry-id'))) {
      data.editing = data.entries[i];
      const prePopulate = {
        $title: data.editing.$title,
        $url: data.editing.$url,
        $notes: data.editing.$notes
      };
      form.elements.title.value = prePopulate.$title;
      form.elements.url.value = prePopulate.$url;
      form.elements.notes.value = prePopulate.$notes;
      previewPhoto.setAttribute('src', prePopulate.$url);
    }
  }
  showDeleteButton();
  document.querySelector('#formTitle').innerHTML = 'Edit Entry';
});

const del = document.querySelector('.delete');
function showDeleteButton() {
  del.classList.remove('hidden');
}

const mod = document.querySelector('.modal');
del.addEventListener('click', function () {
  mod.classList.remove('hidden');
});

const cancel = document.querySelector('.cancel');
cancel.addEventListener('click', function () {
  mod.classList.add('hidden');
});

const confirm = document.querySelector('.confirm');
confirm.addEventListener('click', function () {
  function filterCallback(currentEntry) {
    if (data.editing.entryId !== currentEntry.entryId) {
      return true;
    } else {
      return false;
    }
  }
  const filtered = data.entries.filter(filterCallback);
  data.entries = filtered;
  const liElements = document.querySelectorAll('li');
  for (let j = 0; j < liElements.length; j++) {
    if (data.editing.entryId === Number(liElements[j].getAttribute('data-entry-id'))) {
      liElements[j].remove();
    }
  }
  if (data.entries.length === 0) {
    toggleNoEntries();
  }
  mod.classList.add('hidden');
  viewSwap('entries');
  resetForm();
  data.editing = null;
});
