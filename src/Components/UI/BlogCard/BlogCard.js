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
        width: props.width,
        height: props.height,
        margin: "10px",
        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          transform: "scale(1.05)",
          transition: "transform 0.5s ease-in-out",
          boxShadow: "0px 0px 10px var(--primary-color)",
        },
      }}
    >
      <CardActionArea href={props.link} target={"_blank"}>
        <CardMedia
          component="img"
          height={300}
          width={props.width}
          image={props.image}
          alt="blog post image"
          loading="lazy"
          imagePosition="center"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            minHeight="65px"
            style={{
              color: "var(--primary-color)",
            }}
          >
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
