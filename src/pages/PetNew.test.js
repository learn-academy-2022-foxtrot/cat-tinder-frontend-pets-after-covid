import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PetNew from "./PetNew";

describe("<PetNew/>", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <PetNew />
      </BrowserRouter>
    );
  });
  it("renders the PetNew page.", () => {
    const petNewHeading = screen.getByText("Submit");
    expect(petNewHeading).toBeInTheDocument();
  });
  it("has a form with entries for name, age, enjoys, and image.", () => {
    const nameLabel = screen.getByLabelText(/name/i);
    expect(nameLabel.getAttribute("name")).toEqual("name");
    const ageLabel = screen.getByRole("spinbutton");
    expect(ageLabel.getAttribute("name")).toEqual("age");
    const enjoysLabel = screen.getByPlaceholderText(
      "What does your pet enjoy?"
    );
    expect(enjoysLabel.getAttribute("name")).toEqual("enjoys");
    const imageLabel = screen.getByPlaceholderText(
      "Share an image of your pet."
    );
    expect(imageLabel.getAttribute("name")).toEqual("image");
  });
});
