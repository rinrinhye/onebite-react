import React from "react";

export default function List({ todos, onToggleCheckbox, onDeleteTodo }) {
	return (
		<div className="list">
			<ul>
				{todos.map((todo) => {
					const { text, checked, id } = todo;

					return (
						<li key={id}>
							<input
								type="checkbox"
								onChange={() => {
									onToggleCheckbox(todo);
								}}
								checked={checked}
							/>
							<span>{text}</span>
							<button onClick={() => onDeleteTodo(todo)}>삭제</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
