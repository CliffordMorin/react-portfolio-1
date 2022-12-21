import SocialLinksVertical from "../UI/SocialLinksVertical";
import "animate.css";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import MUINav from "../Navbar/MUINav";

const LandingV2 = () => {
	const { t, i18n } = useTranslation();
	// get the current language

	// find if the user is in the morning, afternoon, or evening
	const time = new Date().getHours();
	let currGreeting = "Hello";
	if (time < 12) {
		currGreeting = t("landing.morning");
	} else if (time <= 12 && time >= 18) {
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
					<span>
						{`${currGreeting}`}, {i18n.language === "en" ? " I'm " : " "}
					</span>
					<span
						style={{
							color: "var(--secondary-color)",
						}}
					>
						{t("landing.name")}
					</span>
					<span>{t("landing.description")}</span>
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
	height: 100vh;
	background-color: var(--black);
`;

const LandingTile = styled.h1`
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	width: fit-content;
	max-width: 800px;
	height: max-content;
	text-align: center;

	background-color: var(--black);

	margin: 50px;
	font-size: 3rem;

	@media (max-width: 1024px) {
		font-size: 2rem;
	}
`;

export default LandingV2;
