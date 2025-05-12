import { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import List from "../components/List";
import { useStateContext } from "../contexts/context";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const getMonthlyData = (pivotDate, data) => {
	const beginTime = new Date(
		pivotDate.getFullYear(),
		pivotDate.getMonth(),
		1,
		0,
		0,
		0
	).getTime();

	const endTime = new Date(
		pivotDate.getFullYear(),
		pivotDate.getMonth() + 1,
		0,
		23,
		59,
		59
	).getTime();

	return data.filter(
		(item) => beginTime <= item.createdDate && item.createdDate <= endTime
	);
};

export default function Home() {
	const [pivotDate, setPivotDate] = useState(new Date());

	const data = useStateContext();

	const onDecreaseMonth = () => {
		setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
	};

	const onIncreaseMonth = () => {
		setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
	};

	const filteredDiary = getMonthlyData(pivotDate, data);

	return (
		<>
			<Header
				title={`${pivotDate.getFullYear()}.${String(
					pivotDate.getMonth() + 1
				).padStart(2, "0")}`}
				leftChild={
					<Button
						text={<SlArrowLeft />}
						onClick={onDecreaseMonth}
						a11yText={"prev"}
					/>
				}
				rightChild={
					<Button
						text={<SlArrowRight />}
						onClick={onIncreaseMonth}
						a11yText={"next"}
					/>
				}
			/>
			<List data={filteredDiary} />
		</>
	);
}
