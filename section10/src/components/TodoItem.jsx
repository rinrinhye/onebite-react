import React, { memo } from "react";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
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
};

// export default memo(TodoItem, (prevProps, nextProps) => {
// 	// 반환값에 따라 Props 가 바뀌었는지, 안바뀌었는지 판단함
// 	// true 반환 : Props 바뀌지 않음 -> 리렌더링X
// 	// false 반환 : Props 바뀜 -> 리렌더링 O

// 	if (prevProps.todo.id !== nextProps.todo.id) return false;
// 	if (prevProps.todo.status !== nextProps.todo.status) return false;
// 	if (prevProps.todo.date !== nextProps.todo.date) return false;
// 	if (prevProps.todo.text !== nextProps.todo.text) return false;

// 	return true;
// });

export default memo(TodoItem)