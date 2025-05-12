import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import App from "./App";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
import Edit from "./pages/Edit";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "write", element: <Write /> },
			{ path: "diary", element: <Diary /> },
			{ path: "diary/:id", element: <Diary /> },
			{ path: "edit/:id", element: <Edit /> },
		],
	},
]);

root.render(<RouterProvider router={router} />);
