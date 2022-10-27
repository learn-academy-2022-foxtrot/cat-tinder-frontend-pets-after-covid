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
    const indexLink = screen.getByText(/add pet/i)
    expect(indexLink).toBeInTheDocument()
  }) 
  it("has clickable links", () => {
    render(
        <BrowserRouter>
        <Header/>
        </BrowserRouter>
    )
    userEvent.click(screen.getByText('Add Pet', {exact:false}))
    expect(screen.getByText('Add Pet', {exact:false}).closest("a")).toHaveAttribute("href", "/petnew")
    
    userEvent.click(screen.getByText('All Pets', {exact:false}))
    expect(screen.getByText('All Pets', {exact:false}).closest("a")).toHaveAttribute("href", "/petindex")
    
    userEvent.click(screen.getByText('Edit Pet', {exact:false}))
    expect(screen.getByText('Edit Pet', {exact:false}).closest("a")).toHaveAttribute("href", "/petedit")

    userEvent.click(screen.getByText('Find Your PAC', {exact:false}))
    expect(screen.getByText('Find Your PAC', {exact:false}).closest("a")).toHaveAttribute("href", "/")
  })
})