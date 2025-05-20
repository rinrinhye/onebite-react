import { useEffect, useState } from "react";
import { useStateContext } from "../contexts/context";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
	const data = useStateContext();
	const [curDiaryItem, setCurDiaryItem] = useState();
	const nav = useNavigate();

	useEffect(() => {
		const currentDiaryItem = data.find((item) => item.id === id);

		if (!currentDiaryItem) {
			alert("존재하지 않는 일기입니다.");
			nav("/", { replace: true });
		}

		setCurDiaryItem(currentDiaryItem);
	}, [id]);

	return curDiaryItem;
};

export default useDiary;
