import React, { useEffect, useRef, useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";

const values = ["최신순", "오래된 순"];

export default function CustomSelect() {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(values[0]);
	const wrapperRef = useRef();

	const toggleDropdown = () => setIsOpen((prev) => !prev);

	const handleSelectedButton = (v) => {
		setSelected(v);
		toggleDropdown();
	};

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div className="box__dropdown" ref={wrapperRef}>
			<button type="button" onClick={toggleDropdown}>
				{selected} <SlArrowDown size={8} style={{ marginLeft: "4px" }} />
			</button>
			{isOpen && (
				<ul className="list">
					{values.map((v, i) => (
						<li className="list-item" key={i}>
							<button
								type="button"
								onClick={() => handleSelectedButton(v)}
								value={v}
							>
								{v}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
