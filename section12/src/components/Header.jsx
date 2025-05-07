import { useState } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

export default function Header() {
	const [year, setYear] = useState(new Date().getFullYear());
	const [month, setMonth] = useState(new Date().getMonth());

	const handleButton = (e) => {
		const button = e.target.closest(".button");

		if (button.className.includes("button__next")) {
			if (month === 12) {
				setYear((prev) => prev + 1);
				setMonth(1);
			} else {
				setMonth((prev) => prev * 1 + 1);
			}
		} else if (button.className.includes("button__prev")) {
			if (month === 1) {
				setYear((prev) => prev - 1);
				setMonth(12);
			} else {
				setMonth((prev) => prev * 1 - 1);
			}
		}
	};

	return (
		<header className="header">
			<button
				type="button"
				className="button button__prev"
				onClick={handleButton}
			>
				<SlArrowLeft />
			</button>
			<p>
				{year}.{month.toString().padStart(2, "0")}
			</p>
			<button
				type="button"
				className="button button__next"
				onClick={handleButton}
			>
				<SlArrowRight />
			</button>
		</header>
	);
}
