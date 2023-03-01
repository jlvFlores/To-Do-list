const listContainer = document.getElementById('list-container');

export const clearList = () => {
  const listItems = listContainer.querySelectorAll('li');
  listItems.forEach((element) => {
    element.remove();
  });
};

export const updateCompleted = (checkbox) => !checkbox.completed;
