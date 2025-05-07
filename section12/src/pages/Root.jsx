import { Outlet, Link } from "react-router-dom";

export default function Root() {
	return (
		<div>
			<Link to={"/"}>home</Link>
			<Link to={"/write"}>write</Link>
			<p>루트당</p>
			<Outlet />
		</div>
	);
}
