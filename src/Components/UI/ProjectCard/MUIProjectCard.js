import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";

import "./ProjectCard.css";

import { FaReact } from "react-icons/fa";

import { IconContext } from "react-icons";
import { RiGatsbyFill } from "react-icons/ri";

import { RiVuejsFill } from "react-icons/ri";

export default function MUIProjectCard(props) {
  console.log(props);
  return (
    <Card
      id="MUI-Card"
      className={props.github.slice(props.github.lastIndexOf("/") + 1)}
    >
      <div
        className=""
        style={{
          position: "relative",
        }}
      >
        <a href={props.link} target={"_blank"} rel="noreferrer">
          <div
            className="card-title-div"
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
            }}
          >
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
              {props.title}
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

          <div
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
            }}
          >
            <IconContext.Provider
              value={{
                color: "var(--secondary-color)",
                className: "global-class-name sill-img",
                size: "40px",
              }}
            >
              {props.tags[0] === "React" ? (
                <FaReact />
              ) : props.tags[0] === "Vue" ? (
                <RiVuejsFill />
              ) : props.tags[0] === "Gatsby" ? (
                <RiGatsbyFill />
              ) : null}
            </IconContext.Provider>
          </div>
        </a>
      </div>
    </Card>
  );
}
