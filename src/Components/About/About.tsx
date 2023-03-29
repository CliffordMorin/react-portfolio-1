import Skills from "../UI/Skills";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const About = () => {
	const { t } = useTranslation();

	return (
		<AboutDiv className="about" id="About">
			<div className="about-inner">
				<AnimationOnScroll
					animateIn="animate__fadeIn"
					animateOnce
					offset={200}
					duration={3}
				>
					<h1
						style={{ textAlign: "center", paddingBottom: "1rem" }}
						className="about-title"
					>
						{t("about.title")}
					</h1>
					<div style={{ paddingBottom: "1rem" }}>
						<p className="about-description">{t("about.description1")}</p>
						<p className="about-description">{t("about.description2")}</p>
						<p className="about-description">
							{t("about.description3a")}
							<a
								href="https://www.rapptrlabs.com/"
								target="_blank"
								rel="noreferrer"
								style={{ color: "var(--secondary-color)" }}
							>
								{t("about.currentCompany")}
							</a>
							{t("about.description3b")}
						</p>
						<p
							className="about-description"
							style={{
								wordBreak: "break-all",
							}}
						>
							{t("about.description4")}
						</p>
					</div>
				</AnimationOnScroll>

				<AnimationOnScroll
					animateIn="animate__fadeIn"
					animateOnce
					offset={250}
					duration={2}
				>
					<Skills />
				</AnimationOnScroll>
			</div>
		</AboutDiv>
	);
};

const AboutDiv = styled.div`
	width: 85vw;

	margin: auto;
	border-radius: 10px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	color: var(--off-white);
	overflow: hidden;

	.about-inner {
		width: 50%;
	}

	.about-title {
		text-decoration: underline;
		text-decoration-color: var(--secondary-color);
		text-decoration-thickness: 5px;
		text-underline-offset: 6px;
		text-decoration-skip-ink: none;
		overflow: hidden;
		margin-bottom: 50px;
	}

	.about-description {
		font-size: 1.5rem;
	}

	@media (max-width: 1000px) {
		.about {
			width: 90%;
			padding: 10px;
		}
		.about-inner {
			width: 100%;
		}

		.about-description {
			font-size: 1rem;
		}
	}
`;

export default About;
