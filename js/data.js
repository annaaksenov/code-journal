/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', handleStorage);
function handleStorage(event) {
  localStorage.setItem('local-storage', JSON.stringify(data));
}
const storage = JSON.parse(localStorage.getItem('local-storage'));
if (storage) {
  data = storage;
}

/** function renderEntry(entry) {
  // const ul = document.getElementById('#ulist');
  const li = document.createElement('li');
  const row = document.createElement('div');
  row.className = 'row';
  const colHalf = document.createElement('div');
  colHalf.className = 'column-half';
  const img = document.createElement('img');
  img.setAttribute('src', data.entries.$url);
  // ^ Could be data.entries.photoURL OR entry.$url or entry.photoURL
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
const ul = document.querySelector('ul');
document.addEventListener('DOMContentLoaded', renderEntry);
for (let i = 0; i < data.entries.length; i++) {
  const result = renderEntry(data.entries[i]);
  ul.append(result);
}
*/
