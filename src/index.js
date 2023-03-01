import './style.css';
import {renderList, addToList, clearCompleted} from './modules/add-remove-list.js';

renderList();

// EVENT LISTENERS
const addBtn = document.getElementById('add-button');
addBtn.addEventListener('click', () => {
  const input = document.getElementById('add-input');
  if (input.value) {
    addToList(input.value);
    input.value = '';
    input.focus();
  }
});

const clearBtn = document.querySelector('.clear-completed');
clearBtn.addEventListener('click', () => clearCompleted());