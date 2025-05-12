export default function Header({ title, leftChild, rightChild }) {
	return (
		<header className="header">
			<div>{leftChild}</div>
			<p>{title}</p>

			<div>{rightChild}</div>
		</header>
	);
}
