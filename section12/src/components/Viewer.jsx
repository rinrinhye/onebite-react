import { getEmotionImage } from "../util/get-emotion-image";
import { emotionList } from "../util/constants";
import "./Viewer.css";

const Viewer = ({ emotionId, content }) => {
	const emotionItem = emotionList.find((item) => item.emotionId === emotionId);

	return (
		<div className="content content__record">
			<div className="box__emotion">
				<p className="title">오늘의 감정</p>
				<div className={`emotion-wrap emotion-wrap--${emotionId}`}>
					<img src={getEmotionImage(emotionId)} alt="" />
					<span>{emotionItem.emotionName}</span>
				</div>
			</div>
			<div className="box__diary">
				<p className="title">오늘의 일기</p>
				<p className="text">{content}</p>
			</div>
		</div>
	);
};

export default Viewer;
