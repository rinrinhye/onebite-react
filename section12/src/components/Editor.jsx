import { useNavigate } from "react-router-dom";
import Button from "./Button";
import EmotionItem from "./EmotionItem";
import { useEffect, useState } from "react";
import { emotionList } from "../util/constants";
import { getStringedDate } from "../util/get-stringed-date";
import "./Editor.css";

export default function Editor({ initData, onSubmit }) {
	const [input, setInput] = useState({
		createdDate: new Date(),
		content: "",
		emotionId: null,
	});
	const { createdDate, content, emotionId } = input;
	const nav = useNavigate();

	useEffect(() => {
		if (initData) {
			setInput({
				...initData,
				createdDate: new Date(Number(initData.createdDate)),
			});
		}
	}, [initData]);

	const onChangeInput = (e) => {
		let name = e.target.name;
		let value = e.target.value;

		if (name === "createdDate") {
			value = new Date(value);
		}

		if (name === "emotionId") {
			value = Number(value);
		}

		setInput({ ...input, [name]: value });
	};

	const onClickSubmitButton = () => {
		onSubmit(input);
	};

	return (
		<div className="content content__editor">
			<div className="box__date">
				<p className="title">오늘의 날짜</p>
				<input
					type="date"
					name="createdDate"
					onChange={onChangeInput}
					value={getStringedDate(createdDate)}
				/>
			</div>
			<div className="box__emotion">
				<p className="title">오늘의 감정</p>
				<div className="emotion-list">
					{emotionList.map((item, index) => (
						<EmotionItem
							{...item}
							key={index}
							onClick={onChangeInput}
							isSelected={emotionId === item.emotionId ? true : false}
						/>
					))}
				</div>
			</div>
			<div className="box__diary">
				<p className="title">오늘의 일기</p>
				<textarea
					className="textarea"
					name="content"
					placeholder="오늘은 어땠나요?"
					value={content}
					onChange={(e) => {
						setInput({ ...input, content: e.target.value });
					}}
				></textarea>
			</div>
			<div className="button-wrap">
				<Button text={"취소하기"} onClick={() => nav(-1)} />
				<Button
					text={"작성완료"}
					color={"green"}
					onClick={onClickSubmitButton}
				/>
			</div>
		</div>
	);
}
