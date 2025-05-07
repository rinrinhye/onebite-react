import "./App.css";
import { useState } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/TodoList";
import Example from "./components/Example";

const filters = ["all", "active", "completed"];

function App() {
	const [filter, setFilter] = useState(filters[0]);
	const [todos, setTodos] = useState([]);
	const [search, setSearch] = useState("");

	const addTodo = (newTodo) => {
		setTodos([...todos, newTodo]);
		console.log(todos);
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

	const getFilteredData = () => {
		const statusFilteredTodos = filterTodosByStatus(todos, filter);

		if (search === "") return statusFilteredTodos;

		return statusFilteredTodos.filter((todo) =>
			todo.text.toLowerCase().includes(search.toLowerCase())
		);
	};

	const filteredTodos = getFilteredData();

	// return (
	// 	<div className="app">
	// 		<Header />
	// 		<Editor addTodo={addTodo} />
	// 		<div className="wrap-list">
	// 			<FilterButtons
	// 				filter={filter}
	// 				filters={filters}
	// 				onFilterChange={setFilter}
	// 			/>
	// 			<SearchInput search={search} onSearchChange={setSearch} />
	// 			<TodoList
	// 				todos={filteredTodos}
	// 				updateTodo={updateTodo}
	// 				deleteTodo={deleteTodo}
	// 			/>
	// 		</div>
	// 	</div>
	// );

	return <Example />;
}

export default App;

function filterTodosByStatus(todos, filter) {
	if (filter === "all") {
		return todos;
	} else if (filter === "active") {
		return todos.filter((todo) => todo.status === false);
	} else if (filter === "completed") {
		return todos.filter((todo) => todo.status === true);
	}

	return todos;
}
