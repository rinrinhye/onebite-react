import React from "react";
import { getEmotionImage } from "../util/get-emotion-image";

export default function EmotionItem({
	emotionId,
	emotionName,
	isSelected,
	onClick,
}) {
	return (
		<button
			type="button"
			name="emotionId"
			value={emotionId}
			className={`button__emotion ${isSelected ? "is-active" : ""}`}
			onClick={onClick}
		>
			<img className="image__emotion" src={getEmotionImage(emotionId)} alt="" />
			<span className="text__emotion">{emotionName}</span>
		</button>
	);
}
