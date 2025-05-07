import { memo } from "react";

const Header = memo(() => {
	const date = new Date().toDateString();

	return (
		<div className="header">
			<p className="text">오늘은 (❁´◡`❁)</p>
			<p className="date">{date}</p>
		</div>
	);
});

export default Header;
