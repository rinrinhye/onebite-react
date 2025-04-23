import { useState } from "react";
import TodoItem from "./TodoItem";

const filteredState = ["all", "active", "complete"];

export default function List({ todos, updateTodo, deleteTodo }) {
	const [search, setSearch] = useState("");
	// const [filter, setFilter] = useState(filteredState[0]);
	let newTodos = todos;

	const handleSearchInput = (e) => {
		setSearch(e.target.value);
	};

	const getFilteredData = () => {
		if (search === "") return todos;

		return todos.filter((todo) =>
			todo.text.toLowerCase().includes(search.toLowerCase())
		);
	};

	// const filterState = (e) => {
	// 	const filterText = e.target.innerText.toLowerCase();

	// 	if (filterText === "all") {
	// 		setFilter("all");
	// 		newTodos = todos;
	// 	} else if (filterText === "active") {
	// 		setFilter("active");
	// 		newTodos = todos.filter((todo) => {
	// 			return todo.state === false;
	// 		});
	// 	} else if (filterText === "complete") {
	// 		setFilter("complete");
	// 		newTodos = todos.filter((todo) => {
	// 			return todo.state === true;
	// 		});
	// 	}
	// };

	const filteredTodo = getFilteredData();

	return (
		<div className="list">
			<p>Todo List</p>
			<button type="button" onClick={filterState}>
				ALL
			</button>
			<button type="button" onClick={filterState}>
				ACTIVE
			</button>
			<button type="button" onClick={filterState}>
				COMPLETE
			</button>
			<input
				type="text"
				placeholder="검색어 입력"
				onChange={handleSearchInput}
				value={search}
			/>
			<ul>
				{filteredTodo.map((todo) => {
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
		</div>
	);
}
