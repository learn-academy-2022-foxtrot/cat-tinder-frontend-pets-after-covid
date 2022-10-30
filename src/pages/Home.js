import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Home = (params) => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-flex">
          <div className="hero-text">
            <h1 className="header-primary">
              Welcome to the <span>#PAC.</span>
            </h1>
            <p className="margin-bottom-md center-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              id est eu erat blandit tincidunt. Ut quis dui elit. Fusce semper,
              metus ut rhoncus scelerisque, mauris velit suscipit leo, vel
              feugiat ante massa vestibulum elit. Praesent rhoncus efficitur
              mauris nec molestie. In faucibus.
            </p>
          </div>
          <div className="hero-buttons">
            <Button
              sx={{
                color: "#fff",
                borderColor: "#fff",
                fontSize: "1.6rem",
                textShadow: "1px 1px #000",
                minWidth: "17rem",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              }}
              variant="outlined"
            >
              Learn More <KeyboardArrowDownIcon />
            </Button>
            <Button
              sx={{ minWidth: "17rem", fontSize: "1.6rem" }}
              variant="contained"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
