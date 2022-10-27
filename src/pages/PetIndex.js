import React from "react";
import mockPets from "../mockPets";
import Card from "../components/Card";

const PetIndex = () => {
  return (
    <div>
      Meet the #PAC
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

export default PetIndex;
