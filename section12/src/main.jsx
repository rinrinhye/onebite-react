import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "write", element: <Write /> },
			{ path: "diary", element: <Diary /> },
			{ path: "diary/:id", element: <Diary /> },
		],
	},
]);

root.render(<RouterProvider router={router} />);
