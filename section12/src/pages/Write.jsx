import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";
import { SlArrowLeft } from "react-icons/sl";
import { useDispatchContext } from "../contexts/context";
import usePageTitle from "../hooks/usePageTitle";

export default function Write() {
	const nav = useNavigate();
	const { onAdd } = useDispatchContext();
	usePageTitle("새 일기 쓰기");

	const onSubmit = (input) => {
		onAdd(input);
		nav("/", { replace: true });
	};

	return (
		<>
			<Header
				title={"새 일기 쓰기"}
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
			/>
			<Editor onSubmit={onSubmit} />
		</>
	);
}
