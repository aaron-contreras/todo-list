import todoItemsAttributes from './dummy-data/todoItems';
import TodoItem from './factories/todoItem';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello world 🌊';

  return element;
}

document.body.appendChild(component());

const todoItems = todoItemsAttributes.map( (attributes) => TodoItem(attributes));

console.dir(todoItems);
