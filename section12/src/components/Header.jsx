export default function Header({ title, leftChild, rightChild }) {
	return (
		<header className="header">
			<div className="header__left">{leftChild}</div>
			<p className="title">{title}</p>
			<div className="header__right">{rightChild}</div>
		</header>
	);
}
