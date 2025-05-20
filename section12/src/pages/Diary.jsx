import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { SlArrowLeft } from "react-icons/sl";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { getStringedDate } from "../util/get-stringed-date";
import useDiary from "../hooks/useDiary";

export default function Diary() {
	const params = useParams();
	const nav = useNavigate();

	const curDiaryItem = useDiary(params.id);

	if (!curDiaryItem) {
		return <div>일기 불러오는 중</div>;
	}
	const { createdDate, emotionId, content } = curDiaryItem;

	const title = getStringedDate(new Date(createdDate));

	return (
		<div>
			<Header
				title={`${title} 기록`}
				leftChild={
					<Button
						onClick={() => nav(-1)}
						text={
							<>
								<SlArrowLeft size={9} style={{ marginBottom: "1px" }} />
								뒤로가기
							</>
						}
					/>
				}
				rightChild={
					<Button text={"수정하기"} onClick={() => nav(`/edit/${params.id}`)} />
				}
			/>
			<Viewer emotionId={emotionId} content={content} />
		</div>
	);
}
