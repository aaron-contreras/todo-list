const DefaultProjectName = "Default";

const TodoItem = ({ title, description, dueDate, priority, projectName=DefaultProjectName }) => {
	const belongsToProjectName = function(projectName) {
		return this.projectName === projectName;
	};

	return {
		projectName,
		title,
		description,
		dueDate,
		priority,
		belongsToProjectName,
	};
};

export default TodoItem;
