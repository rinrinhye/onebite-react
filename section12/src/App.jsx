import { Outlet } from "react-router-dom";
import { useEffect, useMemo, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { stateContext, dispatchContext } from "./contexts/context";

function reducer(state, action) {
	let nextState;

	const { type, data } = action;
	switch (type) {
		case "INIT":
			return data;
		case "ADD": {
			nextState = [data, ...state];
			break;
		}

		case "EDIT": {
			nextState = state.map((diary) => (diary.id === data.id ? data : diary));
			break;
		}

		case "DELETE": {
			nextState = state.filter((diary) => diary.id !== data);
			break;
		}

		default:
			return state;
	}

	localStorage.setItem("diary", JSON.stringify(nextState));

	return nextState;
}

export default function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [state, dispatch] = useReducer(reducer, []);

	useEffect(() => {
		const storedData = localStorage.getItem("diary");

		if (!storedData) {
			setIsLoading(false);
			return;
		}

		const parsedData = JSON.parse(storedData);

		if (!Array.isArray(parsedData)) {
			setIsLoading(false);
			return;
		}

		dispatch({ type: "INIT", data: parsedData });

		setIsLoading(false);
	}, []);

	const onAdd = (item) => {
		dispatch({
			type: "ADD",
			data: {
				id: uuidv4(),
				emotionId: item.emotionId,
				content: item.content,
				createdDate: item.createdDate.getTime(0),
			},
		});
	};

	const onEdit = (item) => {
		dispatch({ type: "EDIT", data: item });
	};

	const onDelete = (id) => {
		dispatch({ type: "DELETE", data: id });
	};

	const memoizedDispatch = useMemo(() => {
		return { onAdd, onEdit, onDelete };
	}, []);

	if (isLoading) {
		return <div>로딩 중...</div>;
	}

	return (
		<div>
			<stateContext.Provider value={state}>
				<dispatchContext.Provider value={memoizedDispatch}>
					<Outlet />
				</dispatchContext.Provider>
			</stateContext.Provider>
		</div>
	);
}
