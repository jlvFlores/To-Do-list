import { clearList, updateCompleted } from './update.js';

// VARIABLES
const listContainer = document.getElementById('list-container');
let listArray = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
let counter = 1;

// UPDATE LOCAL STORAGE
const updateLocalStorage = () => {
  localStorage.setItem('list', JSON.stringify(listArray));
};

// PURE FUNCTIONS
export const pushListItem = (desc) => {
  listArray.push({ description: desc, completed: false, indexVal: listArray.length + 1 });
  return listArray;
};

export const filterListItem = (id, listArray) => {
  listArray = listArray.filter((item) => item.indexVal !== id);
  return listArray;
};

export const renameListItem = (index, desc, listArray) => {
  listArray[index - 1].description = desc;
  return listArray;
};

export const clearSelected = (listArray) => {
  listArray = listArray.filter((item) => item.completed !== true);
  return listArray;
}

// OBJECT UPDATES
const updateKeys = () => {
  listArray.forEach((element) => {
    element.completed = false;
    element.indexVal = counter;
    counter += 1;
  });
  counter = 1;
  updateLocalStorage();
};

const updateDescription = (index, desc) => {
  renameListItem(index, desc, listArray);
  updateLocalStorage();
};

// LISTENERS
const createListeners = () => {
  const checkboxes = document.querySelectorAll('.checkbox');
  const descTextareas = document.querySelectorAll('.desc');

  checkboxes.forEach((checkbox) => {
    if (checkbox.getAttribute('listener') !== true) {
      checkbox.addEventListener('change', () => {
        const arrayindex = Number(checkbox.parentElement.id - 1);
        listArray[arrayindex].completed = updateCompleted(checkbox);
        updateLocalStorage();
      });
    }
  });

  descTextareas.forEach((textarea) => {
    if (textarea.getAttribute('listener') !== true) textarea.addEventListener('keyup', (e) => updateDescription(e.target.dataset.ta, textarea.value));
  });
};

// EXPORTS
export const renderList = () => {
  updateKeys();
  listArray.forEach((element) => {
    listContainer.insertAdjacentHTML('beforeend', `
      <li id="${element.indexVal}">
        <input class="checkbox" type="checkbox">
        <textarea class="desc" maxlength="255" data-ta="${element.indexVal}">${element.description}</textarea>
        <i class="move fa-solid fa-ellipsis-vertical"></i>
        <i class="erase fa-solid fa-trash" data-id="${element.indexVal}"></i>   
      </li>
    `);
  });
  createListeners();
  const removeBtns = document.querySelectorAll('.erase');
  removeBtns.forEach((button) => {
    if (button.getAttribute('listener') !== true) {
      button.addEventListener('click', (e) => {
        clearList();
        filterListItem(+e.target.dataset.id);
        renderList();
      });
    }
  });
};

export const testJest = (a, b) => a + b;

export const clearCompleted = () => {
  clearSelected();
  clearList();
  renderList();
};

export const addToList = (desc) => {
  pushListItem(desc);
  clearList();
  renderList();
};