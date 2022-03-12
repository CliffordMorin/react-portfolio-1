import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AiFillGithub } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import "./ProjectCard.css";

export default function MUIProjectCard(props) {
  const TagButton = styled(Button)(({ theme }) => ({
    color: "var(--secondary-color)",
    backgroundColor: "white",
    disabled: true,
    ":hover": {},
  }));

  return (
    // was 345
    // 194
    //405
    <Card
      sx={{
        width: props.cardWidth,
        minWidth: 345,
        minHeight: 520,
        "&:hover": {
          transform: "scale(1.05)",
          transition: "transform 0.5s ease-in-out",
          boxShadow: "0px 0px 10px var(--primary-color)",
        },
      }}
      id="MUI-Card"
    >
      <CardHeader
        title={props.title}
        style={{
          color: "var(--secondary-color)",
        }}
      />
      <a href={props.link} target={"_blank"} rel="noreferrer">
        <CardMedia
          component="img"
          height="200"
          image={props.image}
          alt={props.title}
          loading="lazy"
          width="100%"
          object-fit="contain"
        />
      </a>
      <CardContent>
        <Typography variant="body2" color="text.primary" id="MUI-description">
          <span>{props.description}</span>
        </Typography>
        <Typography paragraph align="left" minHeight="73px">
          {props.tags.map((tag) => (
            <TagButton
              disabled={true}
              key={tag}
              style={{
                cursor: "default",
                color: "var(--secondary-color)",
                backgroundColor: "white",
              }}
            >
              {tag}
            </TagButton>
          ))}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="github link">
          <div>
            <a href={props.github} target="_blank" rel="noreferrer">
              <AiFillGithub
                className="MUI-icon"
                style={{
                  color: "var(--secondary-color)",
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
                  color: "var(--secondary-color)",
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
            {/*placeholder for youtube icon*/}
          </div>
        </div>
      </CardActions>
    </Card>
  );
}
