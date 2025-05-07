import React from "react";

export default function TodoItem({ todo, updateTodo, deleteTodo }) {
	const { id, text, date, status } = todo;

	const onClickDeleteButton = () => {
		deleteTodo(id);
	};

	const onChangeCheckbox = () => {
		updateTodo({ ...todo, status: !todo.status });
	};

	return (
		<li className="list-item">
			<input type="checkbox" checked={status} onChange={onChangeCheckbox} />
			<span className="text">{text}</span>
			<span className="date">{new Date(date).toLocaleDateString()}</span>
			<button type="button" onClick={onClickDeleteButton}>
				delete
			</button>
		</li>
	);
}
