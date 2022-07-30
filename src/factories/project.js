const createProject = ({ name, todoItems=[] }) => {
	const addTodoItem = function(todoItem) {
		this.todoItems.push(todoItem);
	}

	return {
		name,
		todoItems,
		addTodoItem,
	};
};

export default createProject;
