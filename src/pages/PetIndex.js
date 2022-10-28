import React from "react";
import mockPets from "../mockPets";
import PetCard from "../components/PetCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const PetIndex = ({pets}) => {
  return (
    <>
    <h1>Find Your #PACmates!</h1>
      <Grid
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
        {pets?.map((object, index) => {
          return (
            <Grid item>
              <PetCard object={object} key={object.id}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default PetIndex;
