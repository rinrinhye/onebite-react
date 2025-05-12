import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";

export default function Write() {
	return (
		<>
			<Header
				title={"새 일기 쓰기"}
				leftChild={<Button text={"뒤로 가기"} />}
			/>
			<Editor />
		</>
	);
}
