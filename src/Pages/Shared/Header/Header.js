import React from "react";
import icon from '../../../images/motorcycle.ico';
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
      <img src={icon} alt="" />
      Navbar</Navbar.Brand>
    <Nav>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Inventory</Nav.Link>
      <Nav.Link href="#pricing">Blogs</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
};

export default Header;
