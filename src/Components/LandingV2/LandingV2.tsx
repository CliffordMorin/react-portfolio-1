import SocialLinksVertical from "../UI/SocialLinksVertical";
import "animate.css";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import MUINav from "../Navbar/MUINav";
import "./special-text.css";
// import { useEffect } from "react";

const LandingV2 = () => {
	const { t, i18n } = useTranslation();
	// get the current language

	// find if the user is in the morning, afternoon, or evening
	const time = new Date().getHours();
	let currGreeting = "Hello";
	if (time < 12) {
		currGreeting = t("landing.morning");
	} else if (time >= 12 && time <= 18) {
		currGreeting = t("landing.afternoon");
	} else {
		currGreeting = t("landing.evening");
	}

	return (
		<Landing>
			<MUINav />
			<div
				style={{
					height: "100%",
					justifyContent: "center",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<LandingTile className="animate__animated animate__fadeIn">
					<div
						id="text"
						style={{
							pointerEvents: "none",
						}}
					>
						<div className="line">
							<p className="word">
								{`${currGreeting}`}, {i18n.language === "en" ? " I'm " : " "}
							</p>
						</div>
						<div className="line">
							<p className="word " id="special-1">
								{t("landing.name")}
							</p>
						</div>

						<div className="line">
							<p className="word">{t("landing.description1")}</p>
						</div>
						<div className="line">
							<p className="word">{t("landing.description2")}</p>
						</div>
					</div>
				</LandingTile>
				<SocialLinksVertical />
			</div>
		</Landing>
	);
};

const Landing = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	/* background-color: var(--black); */
	// for desktop

	height: 100vh;
	height: 100svh;
	// on mobile, the landing tile will be centered by factoring in the height of the navbar
	@media (max-width: 768px) {
		height: calc(100vh -56px);
		height: calc(100svh -56px);
	}
`;

const LandingTile = styled.h1`
	//default cursor

	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	width: fit-content;
	max-width: 1000px;
	height: max-content;
	text-align: center;

	/* background-color: var(--black); */

	margin: 50px;
	font-size: 3rem;
	padding-bottom: 61px;
	pointer-events: none !important;

	@media (max-width: 1024px) {
		font-size: 2rem;
	}
`;

export default LandingV2;
