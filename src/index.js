import TodoItem from './todoItem';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello world 🌊';

  return element;
}

document.body.appendChild(component());

const itemOne = TodoItem({
  title: 'Hello World',
  description: 'First Todo Item',
  dueDate: 'Tomorrow',
  priority: 'High'
});

console.log(itemOne);