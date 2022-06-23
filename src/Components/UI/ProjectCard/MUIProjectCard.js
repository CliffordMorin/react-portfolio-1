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
import { AiFillYoutube } from "react-icons/ai";
import america from "../../../images/america.webp";
import japan from "../../../images/japan.webp";
import "./ProjectCard.css";

export default function MUIProjectCard(props) {
  console.log(props);
  const TagButton = styled(Button)(({ theme }) => ({
    color: "var(--secondary-color)",
    backgroundColor: "white",
    disabled: true,
    ":hover": {},
  }));

  return (
    <Card
      sx={{
        "&:hover": {
          transform: "scale(1.05)",
          transition: "transform 0.5s ease-in-out",
          boxShadow: "0px 0px 10px var(--primary-color)",
        },
      }}
      id="MUI-Card"
    >
      <CardHeader
        title={props.index + ". " + props.title}
        className="card-header"
        style={{
          color: "white",
          backgroundColor: "var(--primary-color)",
        }}
      />

      <div className="card-content">
        <a href={props.link} target={"_blank"} rel="noreferrer">
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
        <CardContent>
          <div className="card-content-text">
            <Typography
              variant="body2"
              color="var(--off-white)"
              id="MUI-description"
            >
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
                        marginBottom: "10px",
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
                        marginBottom: "10px",
                      }}
                    ></img>
                  </div>
                ) : null}
              </div>
              <span className="project-description">{props.description}</span>
            </Typography>
            <Typography paragraph align="left" minHeight="73px">
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
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
