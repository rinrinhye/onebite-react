import { getEmotionImage } from "../util/get-emotion-image";
import { emotionList } from "../util/constants";

const Viewer = ({ emotionId, content }) => {
	const emotionItem = emotionList.find((item) => item.emotionId === emotionId);

	return (
		<div className="viewer">
			<div>
				<p className="title">오늘의 감정</p>
				<div className="">
					<img src={getEmotionImage(emotionId)} alt="" />
					<span>{emotionItem.emotionName}</span>
				</div>
			</div>
			<div>
				<p>오늘의 일기</p>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default Viewer;
