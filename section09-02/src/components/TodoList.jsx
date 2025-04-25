import TodoItem from "./TodoItem";

export default function TodoList({ todos, updateTodo, deleteTodo }) {
	return (
		<ul className="todo-list">
			{todos.map((todo) => {
				return (
					<TodoItem
						todo={todo}
						deleteTodo={deleteTodo}
						updateTodo={updateTodo}
						key={todo.id}
					/>
				);
			})}
		</ul>
	);
}
