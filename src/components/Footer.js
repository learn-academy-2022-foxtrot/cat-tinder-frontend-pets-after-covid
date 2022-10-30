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
      <div className="footer">
        <p>
          &copy;{" "}
          <a href="https://www.linkedin.com/in/rhodesmt/">Matthew Rhodes</a> and{" "}
          <a href="https://www.linkedin.com/in/ari-brashear/">Ari Brashear</a>{" "}
          2022
        </p>
      </div>
    </>
  );
};

export default Footer;
