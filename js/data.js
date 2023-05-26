/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', handleStorage);
function handleStorage(event) {
  const serialize = JSON.stringify(data);
  localStorage.setItem('local-storage', serialize);
}
