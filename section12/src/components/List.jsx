import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import ListItem from "./ListItem";
import CustomSelect from "./CustomSelect";

const listArray = ["최신순", "오래된 순"];

export default function List({ data }) {
	const [sortType, setSortType] = useState(listArray[0]);

	const nav = useNavigate();

	const onChangeSortType = (v) => {
		setSortType(v);
	};

	const getSortedData = () => {
		return data.toSorted((a, b) => {
			if (sortType === "오래된 순") {
				return Number(a.createdDate) - Number(b.createdDate);
			} else {
				Number(b.createdDate) - Number(a.createdDate);
			}
		});
	};

	const sortedData = getSortedData();

	return (
		<div className="content content__home">
			<div className="button-wrap">
				<CustomSelect
					onChange={onChangeSortType}
					sortType={sortType}
					listArray={listArray}
				/>
				<Button
					text={"새 일기쓰기"}
					color={"green"}
					onClick={() => nav("/write")}
				/>
			</div>
			<ul className="list__diary">
				{sortedData.map((diary) => {
					return <ListItem key={diary.id} diary={diary} />;
				})}
			</ul>
		</div>
	);
}
