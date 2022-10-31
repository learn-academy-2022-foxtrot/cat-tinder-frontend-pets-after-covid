import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { maxHeight } from "@mui/system";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";

const PetShow = ({ pets }) => {
  const { id } = useParams();
  let currentPet = pets?.find((pet) => pet?.id === +id);
  return (
    <>
      <h1>#PAC Member: {currentPet.name}</h1>
      {currentPet && (
        <>
          <Grid
            justifyContent="center"
            alignItems="center"
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            <div className="show-card-wrapper">
              <Card
                key={currentPet?.id}
                sx={{ maxWidth: "34.5rem", height: "65rem" }}
              >
                <CardMedia
                  sx={{ height: "40rem", width: "34.5rem" }}
                  component="img"
                  alt="`An image of your pet."
                  maxHeight="140"
                  image={currentPet?.image}
                />
                <div className="card-flex">
                  <CardContent
                    sx={{
                      textAlign: "center",
                      height: "17rem",
                    }}
                  >
                    <div className="card-text-flex-container">
                      <Typography
                        gutterBottom
                        component="div"
                        sx={{
                          fontWeight: 300,
                          fontSize: "1.4rem",
                          marginLeft: "1.5rem",
                          marginRight: "1.5rem",
                        }}
                      >
                        Name:
                        <p className="pet-desc-text">{currentPet?.name}</p>
                      </Typography>
                      <Typography
                        gutterBottom
                        component="div"
                        sx={{
                          fontWeight: 300,
                          fontSize: "1.4rem",
                          marginLeft: "1.5rem",
                          marginRight: "1.5rem",
                        }}
                      >
                        Age:
                        <p className="pet-desc-text">{currentPet?.age}</p>
                      </Typography>
                    </div>
                    <Typography
                      gutterBottom
                      component="div"
                      sx={{
                        fontWeight: 300,
                        fontSize: "1.4rem",
                      }}
                    >
                      Enjoys:
                      <p className="pet-enjoys-text">{currentPet?.enjoys}</p>
                    </Typography>
                  </CardContent>
                  <Button
                    className="btn"
                    variant="contained"
                    size="large"
                    href={`/petindex`}
                  >
                    All Pets
                  </Button>
                </div>
              </Card>
            </div>
          </Grid>
        </>
      )}
    </>
  );
};

export default PetShow;
