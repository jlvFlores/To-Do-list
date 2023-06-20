import './style.css';
import { renderList, addToList, clearCompleted } from './modules/add-remove-list.js';

renderList();

// EVENT LISTENERS
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.getElementById('add-input');
  if (input.value) {
    addToList(input.value);
    form.reset();
    input.focus();
  }
});

document.querySelector('.clear-completed').addEventListener('click', () => clearCompleted());