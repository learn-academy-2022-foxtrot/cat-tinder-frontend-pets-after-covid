import React from "react";
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

const Footer = () => {
  return (
    <>
      <Navbar fixed="bottom" className="navbar-custom-footer">
        &copy; Matthew and Ari 2022
      </Navbar>
    </>
  );
};

export default Footer;
