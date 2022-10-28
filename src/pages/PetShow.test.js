import { render, screen } from "@testing-library/react";
import mockPets from "../mockPets";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PetShow from "./PetShow";
import { Pets } from "@mui/icons-material";

describe("<PetShow/>", () => {
    it("renders without crashing", () => {
        render(
            <MemoryRouter initialEntries={["/petshow/1"]}>
                <Routes>
                    <Route path="/petshow/:id" element={<PetShow pets={mockPets}/>}/>
                </Routes>
            </MemoryRouter>
        ) 
        const showRender = screen.getByText(/eating abominations/i)
        expect(showRender).toHaveTextContent(/eating abominations/i)
    })
})