import * as React from "react";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IconContext } from "react-icons";
import { RiGatsbyFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiTwilio } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { TbCloudDataConnection } from "react-icons/tb";
import { AiFillWechat } from "react-icons/ai";
import { SiVercel } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { SiJira } from "react-icons/si";
import { SiHasura } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BsUiChecks } from "react-icons/bs";
import { IoMdPaper } from "react-icons/io";
import { SiMaterialui } from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { DiHeroku } from "react-icons/di";
import { AiOutlineApi } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiStyledcomponents } from "react-icons/si";
import { GithubContributions } from "react-github-graph";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Skills = () => {
	const { t } = useTranslation();

	const FRAMEWORKS = [
		[<FaReact />, "React", "https://reactjs.org/"],
		[<RiGatsbyFill />, "Gatsby", "https://www.gatsbyjs.org/"],
		[<RiVuejsFill />, "Vue", "https://vuejs.org/"],
		[<TbBrandNextjs />, "Next.js", "https://nextjs.org/"],
	];

	const TOOLS = [
		[
			<AiFillHtml5 />,
			"HTML",
			"https://developer.mozilla.org/en-US/docs/Web/HTML",
		],
		[
			// make the size grow with the viewport
			<DiCss3Full />,
			"CSS",
			"https://developer.mozilla.org/en-US/docs/Web/CSS",
		],
		[<FaBootstrap />, "Bootstrap", "https://getbootstrap.com/"],
		[
			<IoLogoJavascript />,
			"JavaScript",
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		],
		[
			<SiStyledcomponents />,
			"Styled Components",
			"https://styled-components.com/",
		],
		[<SiTypescript />, "Typescript", "https://www.typescriptlang.org/"],
		[<SiRedux />, "Redux", "https://redux.js.org/"],
		[<SiMaterialui />, "Material UI", "https://material-ui.com/"],
	];

	const Backend = [
		[<FaNodeJs />, "Node", "https://nodejs.org/en/"],
		[<AiOutlineApi />, "REST", "https://restfulapi.net/"],
		[<GrGraphQl />, "GraphQL", "https://graphql.org/"],
		[<SiMongodb />, "MongoDB", "https://www.mongodb.com/"],
		[<AiOutlineConsoleSql />, "SQL", "https://www.w3schools.com/sql/"],
		[<SiHasura />, "Hasura", "https://hasura.io/"],
	];

	const Server = [
		[<DiHeroku />, "Heroku", "https://www.heroku.com/"],
		[<SiNetlify />, "Netlify", "https://www.netlify.com/"],
		[<SiVercel />, "Vercel", "https://vercel.com/"],
	];

	const Other = [
		[<SiJira />, "Jira", "https://www.atlassian.com/software/jira"],
		[<AiFillGithub />, "Github", "https ://github.com/"],
		[<SiTwilio />, "Twilio", "https://www.twilio.com/"],
		[<TbCloudDataConnection />, "Ably Web Sockets", "https://www.ably.io/"],
		[<AiFillWechat />, "Chat GPT", "https://chat.openai.com/chat"],
	];
	const SKILL_OPTIONS = [
		"Frontend Frameworks",
		"Frontend Tools",
		"Backend",
		"Server",
		"Other",
	];

	const [selectedSkill, setSelectedSkill] = React.useState("Frontend");

	return (
		<>
			<IconContext.Provider
				value={{
					color: "white",
					className: "global-class-name sill-img",
					size: "40px",
				}}
			>
				<SkillsDiv className="Skills">
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							flexWrap: "wrap",
							margin: "0 auto",
							minWidth: "100%",
							alignItems: "center",
						}}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "flex-start",
								flexWrap: "wrap",
								width: "fit-content",
							}}
						>
							<>
								<a
									href="https://docs.google.com/document/d/1r5U9UF6FJc0zr_L98dpIwj9Xe0-0CtoVfoux4nxD-g8/edit?usp=sharing"
									target="_blank"
									id="resume-link"
									rel="noopener noreferrer"
									style={{
										color: "var(--primary-color)",
										textDecoration: "none",
										marginTop: "20px",
										marginBottom: "20px",
										marginRight: "20px",
									}}
								>
									{" "}
									<IoMdPaper size={"1.25rem"} color="var(--secondary-color)" />
									<span
										className="about-description resume-link-text"
										style={{
											marginLeft: "10px",
											color: "white",
										}}
									>
										{t("skills.resume")}
									</span>
								</a>
							</>
							<>
								<a
									href="https://docs.google.com/document/d/11O216h5jTIj0ln6_Gx0yDqBL9GHCv-rJ/edit?usp=sharing&ouid=110021340560949770286&rtpof=true&sd=true"
									target="_blank"
									rel="noopener noreferrer"
									id="resume-link"
									style={{
										color: "var(--primary-color)",
										textDecoration: "none",
										marginTop: "20px",
										marginBottom: "20px",
										marginRight: "20px",
									}}
								>
									{" "}
									<IoMdPaper size={"1.25rem"} color="var(--secondary-color)" />
									<span
										className="about-description resume-link-text"
										style={{
											marginLeft: "10px",
											color: "white",
										}}
									>
										{t("skills.japaneseResume")}
									</span>
								</a>
							</>
							<>
								<a
									href="https://docs.google.com/document/d/1fRI7eljSkGz4WSPEQplo96WJkOopIMpU2teJUlozhyg/edit?usp=sharing"
									target="_blank"
									rel="noopener noreferrer"
									id="resume-link"
									style={{
										textDecoration: "none",
										color: "white",
										marginTop: "20px",
										marginBottom: "20px",
									}}
								>
									<BsUiChecks color="var(--secondary-color)" size={"1.25rem"} />
									<span
										className="about-description resume-link-text"
										style={{
											marginLeft: "0.5rem",
											color: "white",
										}}
									>
										{t("skills.certifications")}
									</span>
								</a>
							</>
						</div>
					</div>
					<div className="github">
						<GithubContributions username="ZacharyTStone" />
					</div>
					<div className="skills-container">
						<ButtonContainer>
							{SKILL_OPTIONS.map((skill: any) => (
								<button
									key={skill[0]}
									onClick={() => setSelectedSkill(skill)}
									className={
										selectedSkill === skill
											? "active skill_option_button"
											: "skill_option_button"
									}
								>
									{skill}
								</button>
							))}
						</ButtonContainer>
						{selectedSkill === "Frontend Frameworks" &&
							FRAMEWORKS.map((skill: any) => (
								<div key={skill[1]} className={"mapped-skill-div"}>
									<a
										href={skill[2]}
										target="_blank"
										rel="noopener noreferrer"
										style={{
											textDecoration: "none",
										}}
									>
										<div key={skill[1]} className="skill-icon">
											<h4 className="skill-icon-text showOnHover">
												{skill[1]}
											</h4>
											<span>
												{" "}
												<span>{skill[0]}</span>
											</span>
										</div>
									</a>
								</div>
							))}
						{selectedSkill === "Frontend Tools" &&
							TOOLS.map((skill: any) => (
								<div key={skill[1]} className={"mapped-skill-div"}>
									<a
										href={skill[2]}
										target="_blank"
										rel="noopener noreferrer"
										style={{
											textDecoration: "none",
										}}
									>
										<div key={skill[1]} className="skill-icon">
											<h4 className="skill-icon-text showOnHover">
												{skill[1]}
											</h4>
											<span>
												<span>{skill[0]}</span>
											</span>
										</div>
									</a>
								</div>
							))}
						{selectedSkill === "Backend" &&
							Backend.map((skill: any) => (
								<div key={skill[1]} className={"mapped-skill-div"}>
									<a
										href={skill[2]}
										target="_blank"
										rel="noopener noreferrer"
										style={{
											textDecoration: "none",
										}}
									>
										<div key={skill[1]} className="skill-icon">
											<h4 className="skill-icon-text showOnHover">
												{skill[1]}
											</h4>
											<span>
												<span>{skill[0]}</span>
											</span>
										</div>
									</a>
								</div>
							))}
						{selectedSkill === "Server" &&
							Server.map((skill: any) => (
								<div key={skill[1]} className={"mapped-skill-div"}>
									<a
										href={skill[2]}
										target="_blank"
										rel="noopener noreferrer"
										style={{
											textDecoration: "none",
										}}
									>
										<div key={skill[1]} className="skill-icon">
											<h4 className="skill-icon-text showOnHover">
												{skill[1]}
											</h4>
											<span>
												<span>{skill[0]}</span>
											</span>
										</div>
									</a>
								</div>
							))}

						{selectedSkill === "Other" &&
							Other.map((skill: any) => (
								<div key={skill[1]} className={"mapped-skill-div"}>
									<a
										href={skill[2]}
										target="_blank"
										rel="noopener noreferrer"
										style={{
											textDecoration: "none",
										}}
									>
										<div key={skill[1]} className="skill-icon">
											<h4 className="skill-icon-text showOnHover">
												{skill[1]}
											</h4>
											<span>
												<span>{skill[0]}</span>
											</span>
										</div>
									</a>
								</div>
							))}
					</div>
				</SkillsDiv>
			</IconContext.Provider>
		</>
	);
};

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 100%;
`;

const SkillsDiv = styled.div`
	.Skills {
		margin: auto;
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: left;
		padding: 10px;
		margin-bottom: 10px;
		margin-top: 10px;
		color: var(--off-white);
	}

	.skills-title {
		text-align: center;
	}

	.skills-container {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: auto;
		justify-content: space-around;
		flex-wrap: wrap;
		flex-flow: row wrap;
		margin-top: 20px;
		margin-bottom: 10px;
	}

	// don't show skills container on mobile
	@media (max-width: 768px) {
		.skills-container {
			display: none;
		}
	}

	.skill-icon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 10px;
		margin-top: 10px;
		color: var(--off-white);
		text-decoration: none !important;
	}

	.skill-icon:hover {
		cursor: pointer;
		transform: scale(1.5);
		transition: transform 0.5s ease-in-out;
		color: var(--secondary-color);
		transform: translateY(-5px);
	}

	.skill-icon-text {
		margin-bottom: 10px;
		color: var(--off-white);
		text-decoration: none;
	}

	.skill-img {
		margin-top: 10px;
	}

	.resume-link-text:hover {
		cursor: pointer;
		color: var(--secondary-color) !important;
	}

	// skill option button neomorphic styling using the seconday color

	.skill_option_button {
		border: 2px solid var(--secondary-color);
		background: var(--background-color);
		color: var(--secondary-color);
		border-radius: 10px;
		cursor: pointer;

		box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1);
		box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 0 0 0.5px rgba(0, 0, 0, 0.1),
			0 0 0 0.5px rgba(0, 0, 0, 0.1);

		font-size: medium;
		font-weight: 600;
		padding: 10px;
		margin: 10px;
		min-height: 70px;
	}

	.active {
		background: var(--secondary-color);
		color: var(--off-white);
	}
`;

export default Skills;
