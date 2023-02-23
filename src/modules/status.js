import { updateLocalStorage, listArray } from './add-remove-list.js';

export const updateStatus = (checkbox) => {
  const id = parseInt(checkbox.parentElement.id - 1);
  checkbox.checked ? listArray[id].completed = true : listArray[id].completed = false;
  updateLocalStorage();
};