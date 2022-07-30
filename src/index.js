import todoItemsAttributes from './dummy-data/todoItems';
import todoItemFactory from './factories/todoItem';
import { projectsAttributes } from './dummy-data/projects';
import createProject from './factories/project';
import addTodoItem from './use-cases/addTodoItem';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello world 🌊';

  return element;
}

document.body.appendChild(component());

// Set up dummy projects
const projects = projectsAttributes.map( (attributes) => createProject(attributes) );
console.dir(projects);

const firstTodoItemAttributes = {
  todoItemAttributes: todoItemsAttributes[0],
  project: projects[1]
};

const secondTodoItemAttributes = {
  todoItemAttributes: todoItemsAttributes[1],
  project: projects[0]
};

addTodoItem(firstTodoItemAttributes);
addTodoItem(secondTodoItemAttributes);
console.dir(projects);
