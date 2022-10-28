import { render, screen } from '@testing-library/react';
import Header from './Header'
import {BrowserRouter} from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe("<Header />", () => {
  it("renders a header without crashing", () => {
    render(
        <BrowserRouter>
        <Header/>
        </BrowserRouter>
    ) 
    const indexLink = screen.getByText(/new pet/i)
    expect(indexLink).toBeInTheDocument()
  }) 
  it("has clickable links", () => {
    render(
        <BrowserRouter>
        <Header/>
        </BrowserRouter>
    )
    userEvent.click(screen.getByText('New Pet', {exact:false}))
    expect(screen.getAllByText('New Pet', {exact:false}).closest("a")).toHaveAttribute("href", "/petnew")
    
    userEvent.click(screen.getByText('All Pets', {exact:false}))
    expect(screen.getAllByText('All Pets', {exact:false}).closest("a")).toHaveAttribute("href", "/petindex")
   

    userEvent.click(screen.getByText('Find Your PAC', {exact:false}))
    expect(screen.getAllByText('Find Your PAC', {exact:false}).closest("a")).toHaveAttribute("href", "/")
  })
})