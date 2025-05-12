import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import ListItem from "./ListItem";

export default function List({ data }) {
	const [sortType, setSortType] = useState("latest");

	const nav = useNavigate();

	const onChangeSortType = (e) => {
		setSortType(e.target.value);
	};

	const getSortedData = () => {
		return data.toSorted((a, b) => {
			if (sortType === "oldest") {
				return Number(a.createdDate) - Number(b.createdDate);
			} else {
				Number(b.createdDate) - Number(a.createdDate);
			}
		});
	};

	const sortedData = getSortedData();

	return (
		<>
			<div>
				<select onChange={onChangeSortType}>
					<option value="latest">최신순</option>
					<option value="oldest">오래된 순</option>
				</select>
				<Button
					text={"새 일기쓰기"}
					color={"green"}
					onClick={() => nav("/write")}
				/>
			</div>
			<ul>
				{sortedData.map((diary) => {
					return <ListItem key={diary.id} diary={diary} />;
				})}
			</ul>
		</>
	);
}
