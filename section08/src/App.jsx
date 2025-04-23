import "./App.css";
import { useState } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

function App() {
	const [todos, setTodos] = useState([]);

	const addTodo = (newTodo) => {
		setTodos([...todos, newTodo]);
	};

	const deleteTodo = (id) => {
		setTodos(
			todos.filter((todo) => {
				return todo.id !== id;
			})
		);
	};

	const updateTodo = (updateTodo) => {
		setTodos(
			todos.map((todo) => {
				return todo.id === updateTodo.id ? updateTodo : todo;
			})
		);
	};

	return (
		<div className="app">
			<Header />
			<Editor addTodo={addTodo} />
			<List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
		</div>
	);
}

export default App;
