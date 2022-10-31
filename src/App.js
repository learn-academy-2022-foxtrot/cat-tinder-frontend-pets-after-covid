import React from "react";
import mockPets from "./mockPets";
import { useState } from "react";
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
  const [pets, setPets] = useState(mockPets);
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/petindex" element={<PetIndex pets={pets} />} />
        <Route path="/petshow/:id" element={<PetShow pets={pets} />} />
        <Route path="/petnew" element={<PetNew />} />
        <Route path="/petedit" element={<PetEdit pets={pets} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
