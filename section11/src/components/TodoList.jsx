import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoStateContext } from "../contexts/TodoContext";

export default function TodoList() {
	const filteredTodos = useContext(TodoStateContext);

	return (
		<ul className="todo-list">
			{filteredTodos.map((todo) => {
				return <TodoItem todo={todo} key={todo.id} />;
			})}
		</ul>
	);
}
