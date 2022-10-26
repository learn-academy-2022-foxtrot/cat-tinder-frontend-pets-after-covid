import React from "react";
import mockCats from "./mockPets";
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

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/petindex" element={<PetIndex />} />
        <Route path="/petshow" element={<PetShow />} />
        <Route path="/petnew" element={<PetNew />} />
        <Route path="/petedit" element={<PetEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
