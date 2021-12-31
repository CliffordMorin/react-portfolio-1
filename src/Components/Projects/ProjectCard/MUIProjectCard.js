import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { AiFillGithub } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import "../ProjectCard/ProjectCard.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MUIProjectCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    // was 345
    // 194
    <Card sx={{ maxWidth: 405 }} id="MUI-Card">
      <CardHeader title={props.title} />
      <a href={props.link} target={"_blank"} rel="noreferrer">
        <CardMedia
          component="img"
          height="254"
          image={props.image}
          alt={props.title}
        />
      </a>
      <CardContent>
        <Typography variant="body2" color="text.primary" id="MUI-description">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="github link">
          <div>
            <a href={props.github}>
              <AiFillGithub
                className="MUI-icon"
                style={{
                  color: "#2e7d32",
                }}
              />
            </a>
          </div>
        </IconButton>
        <IconButton aria-label="live-demo">
          <div>
            <a href={props.link}>
              <RiComputerLine
                className="MUI-icon"
                style={{
                  color: "#2e7d32",
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
            <div
              style={{
                fontSize: "0.8rem",
                color: "#E62776",
              }}
            >
              {props.callToAction}
            </div>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              style={{
                color: "#E62776",
              }}
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </div>
        </div>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <CardHeader title={props.tech} />
          <Typography paragraph>
            {props.tags.map((tag) => (
              <Button color="success" disabled={false} key={tag}>
                {tag},
              </Button>
            ))}
          </Typography>
          <Typography paragraph>{props.tech_description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
