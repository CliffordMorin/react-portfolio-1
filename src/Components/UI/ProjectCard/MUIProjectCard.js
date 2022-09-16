import * as React from "react";
// import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { AiFillGithub } from "react-icons/ai";
// import { RiComputerLine } from "react-icons/ri";
// import { AiFillYoutube } from "react-icons/ai";
// import america from "../../../images/america.webp";
// import japan from "../../../images/japan.webp";
import "./ProjectCard.css";

export default function MUIProjectCard(props) {


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

			<div className="" style={{
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
						className="darken-on-hover"
						image={props.image}
						alt={props.title}
						loading="lazy"
						object-fit="contain"
						style={{
							//darken
							filter: "brightness(0.85)",
							// rounded corners
							borderRadius: "20px",
							// darken on hover
						}}
					/>
					
				</a>
		
			</div>
		</Card>
	);
}
