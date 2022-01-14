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
        border: "5px solid #E62776",
        margin: "10px",
        minHeight: "350px",
      }}
    >
      <CardActionArea href={props.link} target={"_blank"}>
        <CardMedia
          component="img"
          height={200}
          width={200}
          image={props.image}
          alt="blog post image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{
              color: "#E62776",
            }}
          >
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
