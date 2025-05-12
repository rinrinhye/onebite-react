import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { getEmotionImage } from "../util/get-emotion-image";

export default function ListItem({ diary }) {
	const { id, emotionId, createdDate, content } = diary;
	const navigate = useNavigate();

	return (
		<li>
			<Link to={`/diary/${id}`}>
				<div>
					<img src={getEmotionImage(emotionId)} alt="" />
				</div>
				<div>
					<span>{new Date(createdDate).toLocaleString()}</span>
					<p>{content}</p>
				</div>
				<Button text={"수정하기"} onClick={() => navigate(`/edit/${id}`)} />
			</Link>
		</li>
	);
}
