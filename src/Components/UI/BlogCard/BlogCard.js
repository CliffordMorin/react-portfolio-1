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
        minWidth: "300px",
        height: "fit-content",
        margin: "10px",
        borderRadius: "20px",
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
          // draggable="false"
        />
        <CardContent
          style={{
            minHeight: "100px",
          }}
        >
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
