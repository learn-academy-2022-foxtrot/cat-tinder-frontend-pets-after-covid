import { render, screen } from '@testing-library/react';
import NotFound from './NotFound'
import {BrowserRouter} from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe ("<NotFound />", () => {
    it("renders the page without crashing", () => {
           render(
               <BrowserRouter>
               <NotFound/>
               </BrowserRouter>
           ) 
           const errorMessage = screen.getByText(/page not found/i)
           expect(errorMessage).toBeInTheDocument()
         }) 
    it("has clickable links", () => {
        render(
            <BrowserRouter>
            <NotFound/>
            </BrowserRouter>
        )
        userEvent.click(screen.getByText('Return to Home', {exact:false}))
        expect(screen.getByText('Return to Home', {exact:false}).closest("a")).toHaveAttribute("href", "/")
    })
 })