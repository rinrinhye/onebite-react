import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { getEmotionImage } from "../util/get-emotion-image";
import "./ListItem.css";

export default function ListItem({ diary }) {
	const { id, emotionId, createdDate, content } = diary;
	const navigate = useNavigate();

	return (
		<li className="list-item">
			<Link to={`/diary/${id}`}>
				<div className={`image__emotion image__emotion--${emotionId}`}>
					<img src={getEmotionImage(emotionId)} alt="" />
				</div>
				<div className="text-wrap">
					<span className="date">
						{new Date(createdDate).toLocaleDateString()}
					</span>
					<p className="text">{content}</p>
				</div>
			</Link>
			<Button
				text={"수정하기"}
				className={"edit"}
				onClick={() => navigate(`/edit/${id}`)}
			/>
		</li>
	);
}
