import "./Button.css";

export default function Button({ text, color, onClick, a11yText, className }) {
	return (
		<button
			type="button"
			className={`button${color ? ` button--${color}` : ""} ${
				className ? `button__${className}` : ""
			}`}
			onClick={onClick}
		>
			{text}
			{a11yText && <span className="sr-only">{a11yText}</span>}
		</button>
	);
}
