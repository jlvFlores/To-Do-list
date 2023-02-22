import './style.css';

const listContainer = document.querySelector('ul');
const listArray = [
  {
    description: 'Useless text',
    completed: false,
    index: 0,
  },
  {
    description: 'Useless text',
    completed: false,
    index: 1,
  },
  {
    description: 'Useless text',
    completed: false,
    index: 2,
  },
  {
    description: 'Useless text',
    completed: false,
    index: 3,
  },
];

// LOAD
listArray.forEach((element) => {
  listContainer.insertAdjacentHTML('beforeend', `
  <li data-li="${element.index}">
    <input class="checkbox" type="checkbox">
    <textarea maxlength="255">${element.description}</textarea>
    <i class="move fa-solid fa-ellipsis-vertical"></i>
    <i class="erase fa-solid fa-trash" data-id="${element.index}"></i>
  </li>
  `);
});
