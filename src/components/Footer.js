import React from "react";
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
      <Navbar color="info" full="false">
        &copy; Matthew and Ari 2022
      </Navbar>
    </>
  );
};

export default Footer;
