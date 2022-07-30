const deleteTodoItem = ({ project, todoItem }) => {
	const updatedTodoItems = project.todoItems.filter(projectTodoItem => projectTodoItem !== todoItem);

	return updatedTodoItems;
};

export default deleteTodoItem;
