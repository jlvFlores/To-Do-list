import './style.css';
import * as addRemove from './modules/add-remove-list.js';
import { updateStatus } from './modules/status.js';

addRemove.renderList();

// EVENT LISTENERS
const addBtn = document.getElementById('add-button');
addBtn.addEventListener('click', () => {
  const inputValue = document.getElementById('add-input');
  if (inputValue.value) {
    addRemove.addToList(inputValue.value);
    inputValue.value = '';
    inputValue.focus();
  }
});

const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => updateStatus(checkbox));
});

const descTextareas = document.querySelectorAll('.desc');
descTextareas.forEach((textarea) => {
  textarea.addEventListener('keyup', (e) => addRemove.updateDescription(e.target.dataset.ta, textarea.value));
});

const removeBtns = document.querySelectorAll('.erase');
removeBtns.forEach((button) => {
  button.addEventListener('click', (e) => addRemove.removeItem(e.target.dataset.id));
});

const clearBtn = document.querySelector('.clear-completed');
clearBtn.addEventListener('click', () => addRemove.clearCompleted());