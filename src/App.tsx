import "./App.css";
import "animate.css/animate.min.css";
import React, { Suspense, useState, useEffect } from "react";
import LoadingSpinner from "./Components/UI/LoadingSpinner";
import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

import { LandingV2, Footer, Blog, Overlay } from "./Components/index";
const About = React.lazy(() => import("./Components/About/About"));
const Projects = React.lazy(() => import("./Components/Projects/Projects"));

function App() {
	console.log(
		"%cHi! Thanks for checking out my code ☺ If you have any questions, feel free to reach out to me on Linkedin",
		"color:green;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold"
	);

	const particlesInit = useCallback(async (engine: Engine) => {
		console.log(engine);

		// you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(
		async (container: Container | undefined) => {
			await console.log(container);
		},
		[]
	);

	const [showApp, setShowApp] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShowApp(true);
		}, 4000);
	});

	return (
		<div className="App">
			{!showApp ? (
				<Overlay />
			) : (
				<>
					<Particles
						id="tsparticles"
						init={particlesInit}
						loaded={particlesLoaded}
						options={{
							background: {
								color: {
									value: "var(--black)",
								},
							},
							fpsLimit: 60,
							interactivity: {
								events: {
									onClick: {
										enable: true,
										mode: "push",
									},
									onHover: {
										enable: true,
										mode: "repulse",
									},
									resize: true,
								},
								modes: {
									push: {
										quantity: 4,
									},
									repulse: {
										distance: 200,
										duration: 0.4,
									},
								},
							},
							particles: {
								color: {
									value: "#ffffff",
								},
								links: {
									color: "#43c396",
									distance: 150,
									enable: true,
									opacity: 0.2,
									width: 1,
								},
								collisions: {
									enable: true,
								},
								move: {
									direction: "none",
									enable: true,
									outModes: {
										default: "bounce",
									},
									random: false,
									speed: 1,
									straight: false,
								},
								number: {
									density: {
										enable: true,
										area: 800,
									},
									value: 40,
								},
								opacity: {
									value: 0.1,
								},
								shape: {
									type: "circle",
								},
								size: {
									value: { min: 1, max: 5 },
								},
							},
							detectRetina: true,
						}}
					/>
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
