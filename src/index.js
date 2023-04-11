import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "animate.css/animate.min.css";
import App from "./App";

import "./translations/i18n.js";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
