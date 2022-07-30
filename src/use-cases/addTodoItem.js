import createTodoItem from '../factories/todoItem';

const addTodoItem = ({ project, todoItemAttributes }) => {
	const todoItem = createTodoItem(todoItemAttributes);

	project.addTodoItem(todoItem);
};

export default addTodoItem;
