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

/** to refresh teh localStorage empty the storage and in console put is
 * 'data = {
    view: 'entry-form',
    entries: [],
    editing: null,
    nextEntryId: 1
  };'
 the refresh the page.
*/
