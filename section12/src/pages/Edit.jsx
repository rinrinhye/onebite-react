import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import { SlArrowLeft } from "react-icons/sl";
import Editor from "../components/Editor";
import { useDispatchContext } from "../contexts/context";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

export default function Edit() {
	const params = useParams();
	const nav = useNavigate();
	usePageTitle("일기 수정하기");

	const { onDelete, onEdit } = useDispatchContext();

	const curDiaryItem = useDiary(params.id);

	const onClickDelete = () => {
		if (confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요?!?!?!?")) {
			onDelete(params.id);
			nav("/", { replace: true });
		}
	};

	const onSubmit = (input) => {
		if (confirm("일기를 정말 수정할까요?")) {
			onEdit(input);
			nav("/", { replace: true });
		}
	};

	return (
		<div>
			<Header
				title={"일기 수정하기"}
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
					<Button color={"red"} text={"삭제하기"} onClick={onClickDelete} />
				}
			/>
			<Editor initData={curDiaryItem} onSubmit={onSubmit} />
		</div>
	);
}
