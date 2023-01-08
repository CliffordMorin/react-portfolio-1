import "./App.css";
import "animate.css/animate.min.css";
import React, { Suspense, useState, useEffect } from "react";
import LoadingSpinner from "./Components/UI/LoadingSpinner";

import { LandingV2, Footer, Blog, Overlay } from "./Components/index";
const About = React.lazy(() => import("./Components/About/About"));
const Projects = React.lazy(() => import("./Components/Projects/Projects"));

function App() {
	console.log(
		"%cHi! Thanks for checking out my code ☺ If you have any questions, feel free to reach out to me on Linkedin",
		"color:green;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold"
	);

	const [showApp, setShowApp] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShowApp(true);
		}, 4200);
	});

	return (
		<div className="App">
			<Overlay />
			{showApp && (
				<>
					{/* <MUINav /> */}
					<LandingV2 />
					<Suspense fallback={<LoadingSpinner />}>
						<About />
						<Projects />
					</Suspense>
					<Blog />

					<Footer />
				</>
			)}
		</div>
	);
}

export default App;
