import React, { useContext } from "react";
import { Context } from "../App";
import DiaryItem from "./DiaryItem";

const DiaryList = () => {
	const data = useContext(Context);
	return (
		<>
			<ul>
				{data.map((item) => (
					<DiaryItem key={item.id} {...item} />
				))}
			</ul>
		</>
	);
};

export default DiaryList;
