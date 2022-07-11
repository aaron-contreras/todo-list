import todoItemsAttributes from './dummy-data/todoItems';
import TodoItem from './factories/todoItem';
import projectsAttributes from './dummy-data/projects';
import Project from './factories/project';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello world 🌊';

  return element;
}

document.body.appendChild(component());

const todoItems = todoItemsAttributes.map( (attributes) => TodoItem(attributes));
console.dir(todoItems);

const projects = projectsAttributes.map( (attributes) => Project(attributes) );
console.dir(projects);

projects.forEach((project) => {
  project.populateWithBelongingTodoItems(todoItems);
});
console.dir(projects);
