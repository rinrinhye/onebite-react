export default function Button({ text, color, onClick, a11yText }) {
	return (
		<button
			type="button"
			className={`button${color ? ` button--${color}` : ""}`}
			onClick={onClick}
		>
			{text}
			{a11yText && <span className="sr-only">{a11yText}</span>}
		</button>
	);
}
