import './style.css';
import * as addRemove from './modules/add-remove-list.js';
// import * as interactive from './modules/interactive.js';

addRemove.renderList();

// EVENT LISTENERS
const addBtn = document.getElementById('add-button');
addBtn.addEventListener('click', () => {
  const input = document.getElementById('add-input');
  if (input.value) {
    addRemove.addToList(input.value);
    input.value = '';
    input.focus();
  }
});

const clearBtn = document.querySelector('.clear-completed');
clearBtn.addEventListener('click', () => addRemove.clearCompleted());