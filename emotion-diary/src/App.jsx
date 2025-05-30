import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

const list = [
	{ id: 1, createdDate: Date.now(), emotionId: "", content: "히히" },
	{ id: 2, createdDate: Date.now(), emotionId: "", content: "하하" },
	{ id: 3, createdDate: Date.now(), emotionId: "", content: "호호" },
];

export const Context = createContext();

function App() {
	const [data, setData] = useState(list);

	const onAdd = () => {};
	const onDelete = () => {};
	const onUpdate = () => {};

	return (
		<div>
			<Context.Provider value={data}>
				<Outlet />
			</Context.Provider>
		</div>
	);
}

export default App;
