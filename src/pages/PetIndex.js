import React from "react";
import mockPets from "../mockPets";
import PetCard from "../components/PetCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const PetIndex = () => {
  return (
    <>
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
        {mockPets.map((object) => {
          return (
            <Grid item>
              <PetCard
                name={object.name}
                age={object.age}
                enjoys={object.enjoys}
                image={object.image}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default PetIndex;
