import { useReducer } from "react";

// 상태를 실제로 변환시키는 함수!!
function reducer(state, { type, data }) {
	if (type === "INCREASE") {
		return state + data;
	}
}

export default function Example() {
	/* 
        dispatch : 상태변화를 요청해주기만 하는 함수
                : 상태 변화가 있어야 한다는 사실을 알려주는 함수
    */
	const [state, dispatch] = useReducer(reducer, 0); // (상태를 실제로 변환시키는 함수 , state 초기값)

	const onClickButton = () => {
		// 인수로 상태가 어떻게 변화되길 원하는지를 담은 객체를 보냄 : action 객체! 라고 부름
		dispatch({ type: "INCREASE", data: 1 });
	};

	return (
		<div>
			<p>{state}</p>
			<button onClick={onClickButton}>+</button>
		</div>
	);
}
