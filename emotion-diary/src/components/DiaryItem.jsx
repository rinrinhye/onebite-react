import { getStringedDate } from "../util/get-stringed-date";

const DiaryItem = ({ createdDate, content }) => {
	return (
		<li>
			<div>
				<p>{getStringedDate(createdDate)}</p>
				<p>{content}</p>
			</div>
		</li>
	);
};

export default DiaryItem;
