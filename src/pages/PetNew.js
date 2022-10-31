import { React, useState } from "react";
import {
  FormControl,
  Grid,
  Card,
  TextField,
  InputLabel,
  Input,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const PetNew = ({ createPet }) => {
  const navigate = useNavigate();
  const [newPet, setNewPet] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: "",
  });
  const handleChange = (e) => {
    setNewPet({ ...newPet, [e.target.name]: e.target.value });
    console.log("key:", e.target.name);
    console.log("value:", e.target.value);
  };

  const handleSubmit = () => {
    createPet(newPet);
    navigate("/petindex");
  };

  return (
    <>
      <h1>Submit your Pet!</h1>
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
          <Card sx={{ maxWidth: "34.5rem", height: "65rem" }}>
            <FormControl>
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
                <Grid item xs={8} sx={{ width: "6.2rem" }}>
                  <TextField
                    name="name"
                    value={newPet.name}
                    onChange={handleChange}
                    required
                    id="outlined-required"
                    label="Name"
                    placeholder="What's your pet's name?"
                    type="text"
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    name="age"
                    value={newPet.age}
                    onChange={handleChange}
                    required
                    id="outlined-required"
                    label="Age"
                    placeholder="How old is your pet?"
                    type="number"
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    name="enjoys"
                    value={newPet.enjoys}
                    onChange={handleChange}
                    required
                    id="outlined-required"
                    label="Enjoys"
                    placeholder="What does your pet enjoy?"
                    type="text"
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    name="image"
                    value={newPet.image}
                    onChange={handleChange}
                    required
                    id="outlined-required"
                    label="Image"
                    placeholder="Share an image of your pet."
                  />
                </Grid>
                <Grid item xs={8}>
                  <Button variant="contained" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </FormControl>
          </Card>
        </div>
      </Grid>
    </>
  );
};

export default PetNew;
