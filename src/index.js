import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "animate.css/animate.min.css";
import App from "./App";
import { inject } from "@vercel/analytics";

import "./translations/i18n.js";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
inject(); //analytics

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
