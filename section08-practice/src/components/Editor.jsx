import React, { useState } from "react";

export default function Editor({ onAddTodo, onChangeInput, text }) {
	return (
		<div className="editor">
			<form onSubmit={onAddTodo}>
				<input type="text" value={text} onChange={onChangeInput} />
				<button type="submit"></button>
			</form>
		</div>
	);
}
