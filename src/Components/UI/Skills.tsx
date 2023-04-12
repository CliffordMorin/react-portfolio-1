import * as React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { GithubContributions } from "react-github-graph";
import Dot from "../../images/ring-pointer.png";
import { v4 as uuidv4 } from "uuid";

import { FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import {
	AiFillHtml5,
	AiFillWechat,
	AiFillGithub,
	AiOutlineApi,
	AiOutlineConsoleSql,
} from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import {
	SiTypescript,
	SiVercel,
	SiExpress,
	SiRedux,
	SiMongodb,
	SiMui,
	SiStyledcomponents,
	SiNetlify,
	SiTailwindcss,
	SiJquery,
	SiHandlebarsdotjs,
	SiReactrouter,
	SiSass,
	SiAuth0,
	SiFigma,
	SiCanva,
	SiInvision,
	SiMysql,
	SiSequelize,
	SiStrapi,
	SiStripe,
	SiInsomnia,
	SiPostman,
} from "react-icons/si";

import { GrGraphQl, GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { BsUiChecks } from "react-icons/bs";
import { IoMdPaper } from "react-icons/io";
import { DiHeroku, DiCss3Full, DiMaterializecss } from "react-icons/di";

const Skills = () => {
	const { t } = useTranslation();

	const FRAMEWORKS = [
		[<FaReact />, "React", "https://reactjs.org/"],
		[<TbBrandNextjs />, "Next.js", "https://nextjs.org/"],
		[<SiJquery />, "Jquery", "https://jquery.com/"],
		[<SiHandlebarsdotjs />, "Handlebars js", "https://handlebarsjs.com/"],
	];

	const FrameWorksObj = FRAMEWORKS?.map(([icon, name, link]) => ({
		id: uuidv4(),
		icon,
		name,
		link,
	}));

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

		[
			<IoLogoJavascript />,
			"JavaScript",
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		],

		[<SiTypescript />, "Typescript", "https://www.typescriptlang.org/"],
		[<SiStyledcomponents />, "Styled", "https://styled-components.com/"],
		[<FaBootstrap />, "Bootstrap", "https://getbootstrap.com/"],
		[<SiTailwindcss />, "Tailwind", "https://tailwindcss.com/"],
		[<SiReactrouter />, "React Router", "https://reactrouter.com/"],
		[<SiMui />, "MUI", "https://mui.com/"],
		[<GrReactjs />, "Context API", "https://reactjs.org/docs/context.html"],
		[<SiRedux />, "Redux", "https://redux.js.org/"],
		[<DiMaterializecss />, "Materialize Css", "https://materializecss.com/"],
		[<SiSass />, "Sass", "https://sass-lang.com/"],
	];

	const ToolsObj = TOOLS?.map(([icon, name, link]) => ({
		id: uuidv4(),
		icon,
		name,
		link,
	}));

	const Backend = [
		[<FaNodeJs />, "Node", "https://nodejs.org/en/"],
		[<SiStrapi />, "Strapi", "https://strapi.io/"],
		[<AiOutlineApi />, "REST", "https://restfulapi.net/"],
		[<GrGraphQl />, "GraphQL", "https://graphql.org/"],
		[<SiMongodb />, "MongoDB", "https://www.mongodb.com/"],
		[<SiMysql />, "MySQL", "https://www.mysql.com/"],
		[<AiOutlineConsoleSql />, "SQL", "https://www.w3schools.com/sql/"],
		[<SiSequelize />, "Sequelize", "https://sequelize.org/"],
		[<SiExpress />, "Express.js", "https://expressjs.com/"],
		[<SiInsomnia />, "Insomnia", "https://insomnia.rest/"],
		[<SiPostman />, "Postman", "https://www.postman.com/"],
	];

	const BackendObj = Backend?.map(([icon, name, link]) => ({
		id: uuidv4(),
		icon,
		name,
		link,
	}));

	const Server = [
		[<DiHeroku />, "Heroku", "https://www.heroku.com/"],
		[<SiNetlify />, "Netlify", "https://www.netlify.com/"],
		[<SiVercel />, "Vercel", "https://vercel.com/"],
	];

	const ServerObj = Server?.map(([icon, name, link]) => ({
		id: uuidv4(),
		icon,
		name,
		link,
	}));

	const Other = [
		[<AiFillGithub />, "Github", "https ://github.com/"],
		[<SiStripe />, "Stripe", "https://stripe.com/"],
		[<SiAuth0 />, "Auth0", "https://auth0.com/"],
		[<SiFigma />, "Figma", "https://www.figma.com/"],
		[<SiCanva />, "Canva", "https://www.canva.com/"],
		[<SiInvision />, "Invision", "https://www.invisionapp.com/"],
		[<AiFillWechat />, "Chat GPT", "https://chat.openai.com/chat"],
	];

	const OtherObj = Other?.map(([icon, name, link]) => ({
		id: uuidv4(),
		icon,
		name,
		link,
	}));
	// An array of skill options, each with a name and an associated array of options
	const SKILL_OPTIONS = [
		{ name: "Frontend Frameworks", options: FrameWorksObj },
		{ name: "Tools", options: ToolsObj },
		{ name: "Backend", options: BackendObj },
		{ name: "Server", options: ServerObj },
		{ name: "Other", options: OtherObj },
	];
	// Maps each skill option to an object with an ID, name, and options array
	const SkillOptionsObj = SKILL_OPTIONS?.map(({ name, options }) => ({
		id: uuidv4(),
		name,
		options,
	}));
	// The currently selected skill, defaulting to "Frontend Frameworks"
	const [selectedSkill, setSelectedSkill] = React.useState(
		"Frontend Frameworks"
	);
	// The currently selected skill's options, based on the selectedSkill state
	const selectedSkills = SkillOptionsObj.find(
		(skill) => skill.name === selectedSkill
	);

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
									href="https://docs.google.com/document/d/1EYfnlQZsB0ONPOjjPR5jJEeRlv_R1xkN7CuSOdOjgII/edit?usp=sharing"
									target="_blank"
									id="resume-link"
									rel="noopener noreferrer"
									style={{
										color: "var(--primary-color)",
										textDecoration: "none",
										marginTop: "20px",
										marginBottom: "20px",
										marginRight: "20px",
										display: "flex",
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
									href="https://www.credly.com/badges/864f5eeb-a1e8-4098-ac10-da1c2a86ea7e/public_url"
									target="_blank"
									rel="noopener noreferrer"
									id="resume-link"
									style={{
										textDecoration: "none",
										color: "white",
										marginTop: "20px",
										marginBottom: "20px",
										display: "flex",
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
						<GithubContributions username="CliffordMorin" />
					</div>
					<div className="skills-container">
						<ButtonContainer>
							{SkillOptionsObj.map((skill: any) => (
								<SkillTypeButton
									key={skill.id}
									onClick={() => setSelectedSkill(skill.name)}
									className={selectedSkill === skill.name ? "active" : ""}
								>
									{skill.name}
								</SkillTypeButton>
							))}
						</ButtonContainer>
						<SkillIconsDiv>
							{selectedSkills?.options?.map((skill: any) => (
								<div key={skill.id}>
									<a
										href={skill.link}
										target="_blank"
										rel="noopener noreferrer"
										style={{
											textDecoration: "none",
										}}
									>
										<div key={skill.id} className="skill-icon">
											<h4 className="skill-icon-text showOnHover">
												{skill.name}
											</h4>
											<span>
												<span>{skill.icon}</span>
											</span>
										</div>
									</a>
								</div>
							))}
						</SkillIconsDiv>
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

const SkillIconsDiv = styled.div`
	min-height: 150px;
	display: flex;
	width: 100%;
	justify-content: space-around;
	flex-wrap: wrap;
`;

const SkillTypeButton = styled.button`
	border: 2px solid var(--secondary-color);
	background: linear-gradient(
		var(--secondary_color),
		var(--secondary-color-dark)
	);
	color: var(--secondary-color-dark);
	border-radius: 10px;
	/* cursor: pointer; */

	box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1);
	box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 0 0 0.5px rgba(0, 0, 0, 0.1),
		0 0 0 0.5px rgba(0, 0, 0, 0.1);

	font-size: medium;
	font-weight: 600;
	padding: 10px;
	margin: 10px;
	min-height: 50px;
	cursor: url(${Dot}) 4 4, pointer;

	border-radius: 10px;

	@media (max-width: 768px) {
		font-size: small;
		margin: 5px;
		padding: 5px;
	}
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

		gap: 24px;
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
		cursor: url(${Dot}) 4 4, pointer;
		transform: scale(1.5);
		transition: transform 0.5s ease-in-out;
		color: var(--secondary-color);
		transform: translateY(-5px);
	}

	.skill-icon-text {
		margin-bottom: 10px;
		text-decoration: none;
		text-align: center;
		white-space: nowrap;
	}

	.skill-img {
		margin-top: 10px;
	}

	.resume-link-text:hover {
		/* cursor: pointer; */
		cursor: url(${Dot}) 4 4, pointer;
		color: var(--secondary-color) !important;
	}

	// skill option button neomorphic styling using the seconday color

	.active {
		background: linear-gradient(
			var(--secondary_color),
			var(--secondary-color-dark)
		);
		color: var(--secondary-color);
	}

	/* To change the size of the svg logo and text size on mobile for skills */
	@media (max-width: 768px) {
		.skill-icon svg {
			height: 34px;
		}
		.skill-icon-text {
			font-size: 14px;
		}
	}
`;

export default Skills;
