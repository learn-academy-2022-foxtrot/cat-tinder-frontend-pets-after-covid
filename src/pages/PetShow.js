import React from "react";
import Card from "../components/Card";
import mockPets from "../mockPets";

const PetShow = () => {
  return (
    <div>
      Pet Show!
      {mockPets.map((object) => {
        return (
          <Card
            name={object.name}
            age={object.age}
            enjoys={object.enjoys}
            image={object.image}
          />
        );
      })}
    </div>
  );
};

export default PetShow;
