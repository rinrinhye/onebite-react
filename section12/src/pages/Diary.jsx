import { useParams } from "react-router-dom";

export default function Diary() {
	const params = useParams();
	console.log(params);

	return <div>{params.id}번</div>;
}
