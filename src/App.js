import React from "react";
import mockPets from "./mockPets";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PetIndex from "./pages/PetIndex";
import PetShow from "./pages/PetShow";
import PetNew from "./pages/PetNew";
import PetEdit from "./pages/PetEdit";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {


  const [pets, setPets] = useState([])

  useEffect(() => {
    readPet()
  }, [])

  const readPet = () => {
    fetch("http://localhost:3000/pets")
    .then((response) => response.json())
    .then((payload) => {
     setPets(payload)
    })
    .catch((error) => console.log(error))
  }

  const createPet = (pet) => {
    fetch("http://localhost:3000/pets", {
    body: JSON.stringify(pet),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
    })
    .then((response) => response.json())
    .then((payload) => readPet())
    .catch((errors) => console.log("Pet create errors:", errors))
  }
  const updatePet = (cat, id) => {
  fetch(`http://localhost:3000/pets/${id}`, {
    // converting an object to a string
    body: JSON.stringify(pets),
    // specify the info being sent in JSON and the info returning should be JSON
    headers: {
      "Content-Type": "application/json"
    },
    // HTTP verb so the correct endpoint is invoked on the server
    method: "PATCH"
  })
    .then((response) => response.json())
    .then((payload) => readPet())
    .catch((errors) => console.log("Pet update errors:", errors))
}
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/petindex" element={<PetIndex pets={pets} />} />
        <Route path="/petshow/:id" element={<PetShow pets={pets} />} />
        <Route path="/petnew" element={<PetNew createPet={createPet} />} />
        <Route path="/petedit" element={<PetEdit pets={pets} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
