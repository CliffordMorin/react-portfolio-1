import SocialLinksVertical from "../UI/SocialLinksVertical";
import "animate.css";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

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
			<>
				<LandingTile className="animate__animated animate__fadeIn">
					<span>
						{`${currGreeting}`}, {i18n.language === "en" ? " I'm " : ""}
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
			</>
		</Landing>
	);
};

const Landing = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 90vh;
	background-color: var(--black);

	@media (min-width: 1024px) {
		padding-bottom: 10vh;
	}
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
