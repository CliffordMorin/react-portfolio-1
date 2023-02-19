import SocialLinksVertical from "../UI/SocialLinksVertical";
import "animate.css";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import MUINav from "../Navbar/MUINav";
import "./special-text.css";
import { useEffect } from "react";

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

	// text animation

	useEffect(() => {
		const rand = (min: number, max: number) =>
			Math.floor(Math.random() * (max - min + 1)) + min;

		const enhance = (id: string) => {
			const element = document.getElementById(id),
				text = element?.innerText.split("");

			if (element) {
				element.innerText = "";
			}

			text?.forEach((value, index) => {
				const outer = document.createElement("span");

				outer.className = "outer";

				const inner = document.createElement("span");

				inner.className = "inner";

				inner.style.animationDelay = `${rand(-5000, 0)}ms`;

				const letter = document.createElement("span");

				letter.className = "letter";

				letter.innerHTML = value === " " ? "&nbsp" : value;

				letter.style.animationDelay = `${index * 1000}ms`;

				inner.appendChild(letter);

				outer.appendChild(inner);

				element?.appendChild(outer);
			});
		};
		// enhance("special-1");
		enhance("special-2");
	}, [i18n.language]);

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
					<div id="text">
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
							<p className="word fancy" id="special-2">
								{t("landing.description2")}
							</p>

							<p className="word ">{t("landing.description3")}</p>
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
	height: 100vh;
	background-color: var(--black);
`;

const LandingTile = styled.h1`
	//default cursor

	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	width: fit-content;
	max-width: 800px;
	height: max-content;
	text-align: center;

	background-color: var(--black);

	margin: 50px;
	font-size: 3rem;
	padding-bottom: 61px;

	@media (max-width: 1024px) {
		font-size: 2rem;
	}
`;

export default LandingV2;
