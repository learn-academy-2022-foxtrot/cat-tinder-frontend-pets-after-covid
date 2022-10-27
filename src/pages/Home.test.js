import { render, screen } from '@testing-library/react';
import Home from './Home'
import {BrowserRouter} from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe ("<Home />", () => {
    it("renders a home without crashing", () => {
           render(
               <BrowserRouter>
               <Home/>
               </BrowserRouter>
           ) 
           const homeText = screen.getByText(/welcome to the/i)
           expect(homeText).toBeInTheDocument()
         }) 
 })