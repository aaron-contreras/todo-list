const todoItemFactory = ({ title, description, dueDate, priority }) => {
	return {
		title,
		description,
		dueDate,
		priority,
	};
};

export default todoItemFactory;
