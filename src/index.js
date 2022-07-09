import TodoItem from './factories/todoItem';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello world 🌊';

  return element;
}

document.body.appendChild(component());

const todoItemsAttributes = [
  {
    title: 'Todo Item 1',
    description: 'This is the first todo item',
    dueDate: 'Tomorrow',
    priority: 'High'
  },
  {
    title: 'Todo Item 2',
    description: 'This is the second todo item',
    dueDate: 'Next Week',
    priority: 'Medium'
  },
  {
    title: 'Todo Item 3',
    description: 'This is the third todo item',
    dueDate: 'Next Month',
    priority: 'Low'
  },
]


const todoItems = todoItemsAttributes.map( (attributes) => TodoItem(attributes));

console.dir(todoItems);
