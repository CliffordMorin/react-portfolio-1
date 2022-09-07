import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AiFillGithub } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";
import america from "../../../images/america.webp";
import japan from "../../../images/japan.webp";
import "./ProjectCard.css";

export default function MUIProjectCard(props) {
	const TagButton = styled(Button)(({ theme }) => ({
		color: "var(--secondary-color)",
		backgroundColor: "white",
		disabled: true,
		":hover": {},
	}));

	return (
		<Card
		
			id="MUI-Card"
			// slice the github to link to only have the github project name
			className={props.github.slice(props.github.lastIndexOf("/") + 1)}
		>
			{/* <CardHeader
				title={ props.index + ". " + props.title }
				className="card-header"
				style={{
					color: "white",
					backgroundColor: "var(--black)",
				}}
			/> */}

			<div className="card-content" style={{
				position: "relative",
			}}>
				<a href={props.link} target={"_blank"} rel="noreferrer">
					<div className="card-title-div" style={{
						position: "absolute",
						top: "10px",
						left: "10px",
						
					}}>
					<h1 
						className="card-title"
					
					style={{
						color: "white",
						fontSize: "4.7rem",
						fontWeight: "bold",
						textAlign: "left",
						
						margin: "0",
						padding: "0",
						
						opactiy: 1,
						zIndex: 1,
						// underline
						textDecoration: "underline",
						textDecorationColor: "var(--secondary-color)",
						textDecorationThickness: "10px",
						textDecorationStyle: "solid",
					}}
					>
						{ props.title}
					</h1>
					</div>
					<CardMedia
						component={"img"}
						id="card-media"
						image={props.image}
						alt={props.title}
						loading="lazy"
						object-fit="contain"
						style={{
							//darken
							filter: "brightness(0.85)",
						}}
					/>
					
				</a>
				<CardContent  className="card-content-text">
			
						<Typography
							variant="body2"
							color="var(--off-white)"
							id="MUI-description"
						>
							<span className="project-description">{props.description}</span>
						</Typography>
						<Typography paragraph align="left" minHeight="90px">
							<div
								style={{
									minHeight: "90px",
								}}
							>
								{props.tags.map((tag) => (
									<TagButton
										disabled={true}
										key={tag}
										style={{
											background: "var(--primary-color)",
											cursor: "default",
											color: "var(--off-white)",
											marginRight: "10px",
											marginBottom: "10px",
										}}
									>
										{tag}
									</TagButton>
								))}
							</div>
							<div
								className="flag-div"
								style={{
									display: "flex",
									justifyContent: "initial",
								}}
							>
								{props.japanese ? (
									<div>
										<img
											className="flag"
											src={japan}
											alt="Japan Flag"
											style={{
												filter: "brightness(0.85)",
												marginRight: "10px",
												marginTop: "10px",
											}}
										></img>
									</div>
								) : null}
								{props.english ? (
									<div>
										<img
											className="flag"
											src={america}
											alt="America Flag"
											style={{
												filter: "brightness(0.85)",
												marginRight: "10px",
												marginTop: "10px",
											}}
										></img>
									</div>
								) : null}
							</div>
						</Typography>

						<CardActions disableSpacing className="icon-div">
							<IconButton aria-label="github link">
								<div>
									<a href={props.github} target="_blank" rel="noreferrer">
										<AiFillGithub
											className="MUI-icon"
											style={{
												color: "white",
											}}
										/>
									</a>
								</div>
							</IconButton>
							<IconButton aria-label="live-demo">
								<div>
									<a href={props.link} target="_blank" rel="noreferrer">
										<RiComputerLine
											className="MUI-icon"
											style={{
												color: "white",
											}}
										/>
									</a>
								</div>
							</IconButton>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									width: "100%",
									justifyContent: "flex-end",
								}}
							>
								<div
									style={{
										display: "flex",
										width: "fit-content",
										justifyContent: "end",
										alignItems: "center",
									}}
								>
									{props.youtube && (
										<IconButton aria-label="youtube link">
											<div>
												<a
													href={props.youtube}
													target="_blank"
													rel="noreferrer"
												>
													<AiFillYoutube
														className="MUI-icon"
														style={{
															color: "white",
														}}
													/>
												</a>
											</div>
										</IconButton>
									)}
								</div>
							</div>
						</CardActions>
				
				</CardContent>
			</div>
		</Card>
	);
}
