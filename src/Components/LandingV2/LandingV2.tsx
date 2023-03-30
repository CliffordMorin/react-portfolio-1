import SocialLinksVertical from "../UI/SocialLinksVertical";
import "animate.css";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import MUINav from "../Navbar/MUINav";

const LandingV2 = () => {
	const { t, i18n } = useTranslation();
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
	.line {
		display: flex;
		justify-content: space-between;
	}

	.word {
		font-size: clamp(1.6rem, 6vw, 5rem);
		font-family: "Rubik", sans-serif;
		font-weight: 400;
		margin: 0rem;
		text-transform: uppercase;
		transition: opacity 250ms ease;
		opacity: 0.2;
	}

	#special-1 {
		opacity: 1 !important;
	}

	#special-2 {
		color: gray !important;
		opacity: 0.5 !important;
	}

	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100vh;
	height: 100svh;

	@media (max-width: 768px) {
		height: calc(100vh -56px);
		height: calc(100svh -56px);
	}
`;

const LandingTile = styled.h1`
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	width: fit-content;
	max-width: 1000px;
	height: max-content;
	text-align: center;
	user-select: none;

	margin: 50px;
	font-size: 3rem;
	padding-bottom: 61px;

	@media (max-width: 1024px) {
		font-size: 2rem;
	}
`;

export default LandingV2;
