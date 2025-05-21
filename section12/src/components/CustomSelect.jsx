import { useEffect, useRef, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import "./CustomSelect.css";

export default function CustomSelect({ sortType, onChange, listArray }) {
	const [isOpen, setIsOpen] = useState(false);
	const wrapperRef = useRef();

	const toggleDropdown = () => setIsOpen((prev) => !prev);

	const handleSelectedButton = (v) => {
		onChange(v);
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
		<div className="box__dropdown" ref={wrapperRef} onChange={onChange}>
			<button type="button" onClick={toggleDropdown}>
				{sortType} <SlArrowDown size={8} style={{ marginLeft: "4px" }} />
			</button>
			{isOpen && (
				<ul className="list">
					{listArray.map((v, i) => (
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
