import createTodoItem from '../factories/todoItem';

const addTodoItem = ({ project, todoItemAttributes }) => {
	const todoItem = createTodoItem(Object.assign(todoItemAttributes, { projectName: project.name }));

	project.addTodoItem(todoItem);
};

export default addTodoItem;
