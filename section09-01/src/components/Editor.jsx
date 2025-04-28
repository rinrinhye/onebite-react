import { useState, useRef } from "react";
import { uuid4 } from "uuid4";

export default function Editor({ addTodo }) {
	const [text, setText] = useState("");
	const textRef = useRef();

	const onChangeInput = (e) => {
		setText(e.target.value);
	};

	const onClickButton = () => {
		if (text.trim() === "") {
			setText("");
			textRef.current.focus();
			return;
		}

		addTodo({
			id: uuid4(),
			text,
			date: new Date().getTime(),
			status: false,
		});
		setText("");
	};

	const onKeyDown = (e) => {
		if (e.key === "Enter") {
			onClickButton();
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
			<button type="button" onClick={onClickButton}>
				Add
			</button>
		</div>
	);
}
