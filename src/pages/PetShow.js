import React from "react";
import PetCard from "../components/PetCard";
import mockPets from "../mockPets";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { maxHeight } from "@mui/system";
import { NavLink } from "react-router-dom";

const PetShow = ({pets}) => {
  const {id} = useParams()
 let currentPet = pets?.find((pet) => pet.id === +id)
  return (
    <>
    {currentPet && (
      <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: "40rem" }}
          component="img"
          alt="`An image of your pet."
          maxHeight="140"
          image={currentPet.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name: {currentPet.name}
          </Typography>
          <Typography>Age: {currentPet.age}</Typography>
          <Typography variant="body2" color="text.secondary">
            {currentPet.enjoys}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <NavLink to={`/petshow/${currentPet.id}`}>
              See Pet 
            </NavLink>
          </Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </>
    )} 
    </>
  )
};

export default PetShow;
