import "./App.css";
import "animate.css/animate.min.css";
import React, { Suspense, useState, useEffect, useCallback } from "react";

import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

import { useMediaQuery } from "react-responsive";

import { Overlay } from "./Components/index";

// kicks off immediately when the current file is imported
const LandingComponentPromise = import("./Components/LandingV2/LandingV2");
const AboutComponentPromise = import("./Components/About/About");
const ProjectsComponentPromise = import("./Components/Projects/Projects");

const FooterComponentPromise = import("./Components/Footer/Footer");

// by the time this gets rendered, your component is probably already loaded
// Suspense still works exactly the same with this.
const LandingV2 = React.lazy(() => LandingComponentPromise);
const About = React.lazy(() => AboutComponentPromise);
const Projects = React.lazy(() => ProjectsComponentPromise);

const Footer = React.lazy(() => FooterComponentPromise);

function App() {
	console.log(
		"%cHi! Thanks for checking out my code ☺ If you have any questions, feel free to reach out to me on Linkedin",
		"color:green;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold"
	);

	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});

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
					{/* {isDesktopOrLaptop && ( */}
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
										enable: isDesktopOrLaptop,
										mode: "push",
									},
									onHover: {
										enable: false,
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
					{/* )} */}

					<Suspense fallback={<h1>Loading...</h1>}>
						<LandingV2 />
						<About />
						<Projects />

						<Footer />
					</Suspense>
				</>
			)}
		</div>
	);
}

export default App;
