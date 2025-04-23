import { useState, useRef } from "react";

export default function Editor({ addTodo }) {
	const [text, setText] = useState("");
	const idRef = useRef(0);
	const textRef = useRef();

	const onChangeInput = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = () => {
		if (text === "") {
			textRef.current.focus();
			return;
		}

		addTodo({
			id: idRef.current++,
			text,
			date: new Date().getTime(),
			state: false,
		});
		setText("");
	};

	const onKeyDown = (e) => {
		if (e.keyCode === 13) {
			handleSubmit();
		}
	};

	return (
		<div className="editor">
			<input
				type="text"
				placeholder="Todo"
				ref={textRef}
				onChange={onChangeInput}
				onKeyDown={onKeyDown}
				value={text}
			/>
			<button type="button" onClick={handleSubmit}>
				Add
			</button>
		</div>
	);
}
