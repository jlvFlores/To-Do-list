const listContainer = document.getElementById('list-container');

export const clearList = () => {
  const listItems = listContainer.querySelectorAll('li');
  listItems.forEach((element) => {
    element.remove();
  });
};

export const updateCompleted = (checkbox) => !checkbox.completed;

export const updateCompletedV2 = (index, array) => {
  array[index].completed = !array[index].completed;
  return array;
};