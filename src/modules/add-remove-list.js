// VARIABLES
const listContainer = document.getElementById('list-container');
let listArray = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
let counter = 1;
let counter2 = 1;

// UPDATE
const updateLocalStorage = () => {
  localStorage.setItem('list', JSON.stringify(listArray));
};

const updateIndexes = () => {
  listArray.forEach((element) => {
    element.indexVal = counter2;
    counter2 += 1;
  });
  counter2 = 1;
  updateLocalStorage();
};

export const updateDescription = (index, desc) => {
  listArray[index].description = desc;
  updateLocalStorage();
};

// LOAD
export const renderList = () => {
  listArray.forEach((element) => {
    listArray[counter - 1].indexVal = counter;
    element.indexVal = counter;
    listContainer.insertAdjacentHTML('beforeend', `
    <li id="${element.indexVal}">
      <input class="checkbox" type="checkbox">
      <textarea class="desc" maxlength="255" data-ta="${element.indexVal}">${element.description}</textarea>
      <i class="move fa-solid fa-ellipsis-vertical"></i>
      <i class="erase fa-solid fa-trash" data-id="${element.indexVal}"></i>   
    </li>
  `);
    counter += 1;
  });
};

// REMOVE
export const removeItem = (id) => {
  const selectedElement = document.getElementById(`${id}`);
  listContainer.removeChild(selectedElement);
  listArray = listArray.filter((item) => item.indexVal !== +id);
  updateIndexes();
};

// ADD
const addNew = () => {
  const newItem = listArray[listArray.length - 1];
  listContainer.insertAdjacentHTML('beforeend', `
  <li id="${newItem.indexVal}">
    <input class="checkbox" type="checkbox">
    <textarea class="desc" maxlength="255" data-ta="${newItem.indexVal}">${newItem.description}</textarea>
    <i class="move fa-solid fa-ellipsis-vertical"></i>
    <i class="erase fa-solid fa-trash" data-id="${newItem.indexVal}"></i>
  </li>
  `);

  const newLI = listContainer.querySelector('li:last-of-type');
  const erase = newLI.querySelector('i:last-of-type');
  erase.addEventListener('click', (e) => removeItem(e.target.dataset.id));
  updateIndexes();
};

export const addToList = (desc) => {
  listArray.push({ description: desc, completed: false, indexVal: counter });
  counter += 1;
  updateLocalStorage();
  addNew();
};