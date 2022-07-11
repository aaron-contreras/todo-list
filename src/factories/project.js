const Project = ({ name, todoItems=[] }) => {
	const populateWithBelongingTodoItems = function(todoItems) {
		this.todoItems = todoItems.filter((todoItem) => {
			return todoItem.belongsToProjectName(this.name);
		});

		console.log(this.todoItems);
	};

	return {
		name,
		todoItems,
		populateWithBelongingTodoItems,
	};
};

export default Project;
