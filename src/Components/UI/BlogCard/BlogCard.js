import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function BlogCard(props) {
  return (
    <Card
      sx={{
        backgroundColor: "var(--primary-color)",
        color: "white",
        width: "100%",
        minWidth: "350px",

        height: "fit-content",
        margin: "10px",
        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)",
        userSelect: "none",
      }}
    >
      <CardActionArea href={props.link} target={"_blank"}>
        <CardMedia
          component="img"
          height={300}
          image={props.image}
          alt="blog post image"
          loading="lazy"
          style={{
            filter: "brightness(0.75)",
          }}
        />
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            style={{
              color: "var(--off-white)",
            }}
          >
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
