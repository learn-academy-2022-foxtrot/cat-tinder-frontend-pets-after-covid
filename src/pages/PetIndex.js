import Grid from "@mui/material/Grid";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const PetIndex = ({ pets }) => {
  return (
    <>
      <h1>Find Your #PACmates!</h1>
      <Grid
        justifyContent="center"
        alignItems="center"
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        {pets?.map((pet) => {
          return (
            <Grid item>
              <Card key={pet.id} sx={{ maxWidth: "34.5rem", height: "55rem" }}>
                <CardMedia
                  sx={{ height: "40rem", width: "34.5rem" }}
                  component="img"
                  alt="`An image of your pet."
                  maxHeight="140"
                  image={pet.image}
                />
                <div className="card-flex">
                  <CardContent sx={{ textAlign: "center", height: "9rem" }}>
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
                        <p className="pet-desc-text">{pet.name}</p>
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
                        <p className="pet-desc-text">{pet.age}</p>
                      </Typography>
                    </div>
                  </CardContent>
                  <Button
                    className="btn"
                    variant="contained"
                    size="large"
                    href={`/petshow/${pet.id}`}
                  >
                    See Pet
                  </Button>
                </div>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default PetIndex;
