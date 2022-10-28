import { render, screen } from "@testing-library/react";
import mockPets from "../mockPets";
import { BrowserRouter } from "react-router-dom";
import PetIndex from "./PetIndex";

describe("<PetIndex/>", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
            <PetIndex pets={mockPets}/>
            </BrowserRouter>
        )
    })
    it("renders without crashing", () => {
        const showRender = screen.getByText(/find your/i)
        expect(showRender).toHaveTextContent(/find your/i)
    })
    // it("renders pet cards", () => {
    //     console.log(mockPets)
    //     mockPets.map(pet => {
    //         const name = screen.getAllByRole('img' )
    //         expect(name).toBeInTheDocument()
    //         // console.log(pet.name)
    //         // const petName = screen.getByText(/name/i)
    //         // expect(petName).toBeInTheDocument()
            
    //         // const petImage = screen.getAllByRole("img")
    //         // expect(petImage).toBeVisible
    //     })
    // })
})