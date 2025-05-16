import { Outlet } from "react-router-dom";
import { useMemo, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { stateContext, dispatchContext } from "./contexts/context";

const mockData = [
	{
		id: uuidv4(),
		createdDate: new Date("2025-05-08").getTime(),
		emotionId: 1,
		content: "오늘의 기분 꺅꺅꺅",
	},
	{
		id: uuidv4(),
		createdDate: new Date("2025-05-07").getTime(),
		emotionId: 2,
		content: "오늘의 기분 우우우",
	},
	{
		id: uuidv4(),
		createdDate: new Date("2025-04-08").getTime(),
		emotionId: 3,
		content: "오늘의 기분 soso",
	},
];

function reducer(state, action) {
	const { type, data } = action;
	switch (type) {
		case "ADD":
			return [data, ...state];

		case "EDIT":
			return state.map((diary) => (diary.id === data.id ? data : diary));

		case "DELETE":
			return state.filter((diary) => diary.id !== data);

		default:
			return state;
	}
}

export default function App() {
	const [state, dispatch] = useReducer(reducer, mockData);

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
