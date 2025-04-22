import "./app.css";
import { useState } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";

const initialValue = { id: "", checked: false, text: "" };

function App() {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState(initialValue);

	const onChangeInput = (e) => {
		setTodo({ id: uuidv4(), text: e.target.value, checked: false });
	};

	const onAddTodo = (e) => {
		e.preventDefault();

		if (todo.text.trim().length === 0) return;

		setTodos([...todos, todo]);
		setTodo(initialValue);
	};

	const onDeleteTodo = (current) => {
		setTodos(
			todos.filter((todo) => {
				return current.id !== todo.id;
			})
		);
	};

	const onToggleCheckbox = (current) => {
		setTodos(
			todos.map((todo) => {
				return current.id === todo.id
					? { ...todo, checked: !current.checked }
					: todo;
			})
		);
	};

	return (
		<div className="todo">
			<Header />
			<Editor
				onAddTodo={onAddTodo}
				onChangeInput={onChangeInput}
				text={todo.text}
			/>
			<List
				todos={todos}
				onToggleCheckbox={onToggleCheckbox}
				onDeleteTodo={onDeleteTodo}
			/>
		</div>
	);
}

export default App;
