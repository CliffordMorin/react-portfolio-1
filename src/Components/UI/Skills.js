import "./Skills.css";
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
import { GrGraphQl } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BsUiChecks } from "react-icons/bs";
import { IoMdPaper } from "react-icons/io";
import { SiMaterialui } from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { GithubContributions } from "react-github-graph"

const Skills = (props) => {
	let content = {
		English: {
			title: "Skills",
			skills: [
				[
					<AiFillHtml5 />,
					"HTML",
					"https://developer.mozilla.org/en-US/docs/Web/HTML",
				],
				[
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
				[<SiTypescript />, "Typescript", "https://www.typescriptlang.org/"],
				[<FaNodeJs />, "Node", "https://nodejs.org/en/"],
				[<SiMongodb />, "MongoDB", "https://www.mongodb.com/"],

				[<AiOutlineConsoleSql />, "SQL", "https://www.w3schools.com/sql/"],
				[<FaReact />, "React", "https://reactjs.org/"],
				[<SiRedux />, "Redux", "https://redux.js.org/"],
				[<SiMaterialui />, "Material UI", "https://material-ui.com/"],
				[<RiGatsbyFill />, "Gatsby", "https://www.gatsbyjs.org/"],
				[<GrGraphQl />, "GraphQL", "https://graphql.org/"],
				[<RiVuejsFill />, "Vue", "https://vuejs.org/"],
			],

			resume: "Resume",
			japaneseResume: "Japanese Resume",
			japaneseWorkHistory: "Japanese Work History",
			certifications: "Certifications",
		},
		Japanese: {
			title: "スキル",

			skills: [
				[
					<AiFillHtml5 />,
					"HTML",
					"https://developer.mozilla.org/en-US/docs/Web/HTML",
				],
				[
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
				[<SiTypescript />, "Typescript", "https://www.typescriptlang.org/"],
				[<FaNodeJs />, "Node", "https://nodejs.org/en/"],
				[<SiMongodb />, "MongoDB", "https://www.mongodb.com/"],
				// sql

				[<AiOutlineConsoleSql />, "SQL", "https://www.w3schools.com/sql/"],

				[<FaReact />, "React", "https://reactjs.org/"],
				[<SiRedux />, "Redux", "https://redux.js.org/"],
				[<RiGatsbyFill />, "Gatsby", "https://www.gatsbyjs.org/"],
				[<GrGraphQl />, "GraphQL", "https://graphql.org/"],
				[<RiVuejsFill />, "Vue", "https://vuejs.org/"],
			],
			resume: "履歴書(英語)",
			japaneseResume: "履歴書(日本語)",
			japaneseWorkHistory: "職務経歴書(日本語)",

			certifications: "資格",
		},
	};

	props.language === "Japanese"
		? (content = content.Japanese)
		: (content = content.English);
	return (
		<>
			<IconContext.Provider
				value={{
					color: "white",
					className: "global-class-name sill-img",
					size: "40px",
				}}
			>
				<div className="Skills">
					{/* <h1 className="skills-title">{content.title}</h1> */}
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
										{content.resume}
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
										{content.japaneseResume}
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
								{content.certifications}
							</span>
						</a>
							</>
						</div>
			
					</div>
					<div className="github">
					<GithubContributions username="ZacharyTStone"/>
					</div>
					<div className="skills-container">
						
						{content.skills.map((skill) => (
							<div key = {skill[1]} >
							<a
								href={skill[2]}
								target="_blank"
								rel="noopener noreferrer"
								style={{
									textDecoration: "none",
								}}
							>
								<div key={skill[1]} className="skill-icon">
									<h4 className="skill-icon-text showOnHover">{skill[1]}</h4>
									<span>
										{" "}
										<span>{skill[0]}</span>
									</span>
								</div>
							</a>
							</div>
						))}
					</div>
				</div>
			</IconContext.Provider>
		</>
	);
};

export default Skills;
