import { Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
	return (
		<div>
			<p>app이다</p>
			<Outlet />
		</div>
	);
}
