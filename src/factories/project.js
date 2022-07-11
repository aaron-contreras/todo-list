const createProject = ({ name, todoItems=[] }) => {
	const populateWithBelongingTodoItems = function(todoItems) {
		this.todoItems = todoItems.filter((todoItem) => {
			return todoItem.belongsToProjectName(this.name);
		});
	};

	return {
		name,
		todoItems,
		populateWithBelongingTodoItems,
	};
};

export default Project;
