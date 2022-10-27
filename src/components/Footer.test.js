import { render, screen } from '@testing-library/react';
import Footer from './Footer'
import {BrowserRouter} from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe ("<Footer />", () => {
   it("renders a header without crashing", () => {
          render(
              <BrowserRouter>
              <Footer/>
              </BrowserRouter>
          ) 
          const footerText = screen.getByText(/matthew and ari 2022/i)
          expect(footerText).toBeInTheDocument()
        }) 
})
