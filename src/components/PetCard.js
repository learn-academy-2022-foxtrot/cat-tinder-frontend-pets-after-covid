import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { maxHeight } from "@mui/system";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";

const PetCard = ({object, index}) => {
  console.log(object.id)
  return (
    <div>
      <Card key={object.id} sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: "40rem" }}
          component="img"
          alt="`An image of your pet."
          maxHeight="140"
          image={object.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name: {object.name}
          </Typography>
          <Typography>Age: {object.age}</Typography>
          <Typography variant="body2" color="text.secondary">
            {object.enjoys}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <NavLink to={`/petshow/${object.id}`}>
              See Pet 
            </NavLink>
          </Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default PetCard;
