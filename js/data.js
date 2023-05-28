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

if (localStorage.getItem('local-storage', JSON.stringify(data))) {
  data = JSON.parse(localStorage.getItem('local-storage', JSON.stringify(data)));
}
