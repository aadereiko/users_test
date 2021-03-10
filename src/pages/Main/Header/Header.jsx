import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Users</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Link 1</Nav.Link>
          <Nav.Link href="#link">Link 2</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
