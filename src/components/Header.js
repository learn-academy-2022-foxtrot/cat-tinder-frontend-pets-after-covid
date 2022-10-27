import React, { useState } from "react";
import "../App.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const hexColors = {
    black: "#000",
  };

  return (
    <div>
      <Navbar expand="md" container="sm" className="navbar-custom" full="false">
        <NavbarBrand className="" href="/">
          <ion-icon name="heart-circle-outline"></ion-icon>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav pills={true} className="ms-auto" navbar>
            <NavItem className="navitem-custom">
              <NavLink className="navlink-custom" href="/petnew">
                Add Pet
              </NavLink>
            </NavItem>
            <NavItem className="navitem-custom">
              <NavLink className="navlink-custom" href="/petindex">
                All Pets
              </NavLink>
            </NavItem>
            <NavItem className="navitem-custom">
              <NavLink className="navlink-custom" href="/petedit">
                Edit Pet
              </NavLink>
            </NavItem>
            <NavItem className="navitem-custom">
              <NavLink className="navlink-custom" href="/">
                Find Your PAC
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
