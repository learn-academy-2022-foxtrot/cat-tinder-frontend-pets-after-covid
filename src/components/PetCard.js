import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { maxHeight } from "@mui/system";

const PetCard = (props) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: "40rem" }}
          component="img"
          alt="`An image of your pet."
          maxHeight="140"
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name: {props.name}
          </Typography>
          <Typography>Age: {props.age}</Typography>
          <Typography variant="body2" color="text.secondary">
            {props.enjoys}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="/petshow/:id">
            See Pet
          </Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default PetCard;
