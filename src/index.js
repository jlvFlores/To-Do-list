import './style.css';
import * as AddRemove from './modules/add-remove-list.js';

AddRemove.renderList();

// EVENT LISTENERS
const addBtn = document.getElementById('add-button');
addBtn.addEventListener('click', () => {
  const inputValue = document.getElementById('add-input');
  if (inputValue.value) {
    AddRemove.addToList(inputValue.value);
    inputValue.value = '';
    inputValue.focus();
  };
});

const descTextareas = document.querySelectorAll('.desc');
descTextareas.forEach((textarea) => {
  textarea.addEventListener('keyup', (e) => AddRemove.updateDescription(e.target.dataset.ta, textarea.value));
});

const removeBtns = document.querySelectorAll('.erase');
removeBtns.forEach((button) => {
  button.addEventListener('click', (e) => AddRemove.removeItem(e.target.dataset.id));
});
