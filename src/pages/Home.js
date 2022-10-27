import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Home = (params) => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="header-primary">Welcome to the #PAC.</h1>
        </div>
      </div>
      <p>
        The devastating lockdowns of 2020 were unprecidented; not only for the
        millions of lives lost worldwide to the COVID-19 virus, but also for the
        mental anguish that was associated with extreme prolonged isolation.
        Humans crave touch. We need to feel a sense of companionship and love
        and be able to reciprocate those feelings. It was during this period
        where millions of us turned to animals as a way to fill that void. The
        results speak for themselves. The Washington Post: "More than 23 million
        American households — nearly 1 in 5 nationwide — adopted a pet during
        the pandemic, according to the American Society for the Prevention of
        Cruelty to Animals (ASPCA)." CNET: "...pets can help you improve your
        mental health. The bond with your animal can ease mental illness
        symptoms, give you companionship and confidence and add a healthy level
        of structure to your days." As most of us (you should!) are well aware,
        pet adoption comes with its own unique set of challenges. While many we
        are able to quickly pick up to the point where it becomes second nature,
        socialization of animals is a difficult one, especially among those
        animals that were adopted during the pandemic. While they, as we were
        victims of circumstance, the time has come to get your animal out into
        the world! Your animal is just like us, and needs friends and social
        interactions for a healthy and long life! That's why we here at Pets
        After Covid want to help you and your furry friend your #PAC!
      </p>
    </>
  );
};

export default Home;
