import React from "react";
import icon from '../../../images/motorcycle.ico';
import { Container, Nav, Navbar} from "react-bootstrap";

const Header = () => {
  return (
  <Navbar sticky="top" bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
      <img src={icon} alt="" />
      </Navbar.Brand>
    <Nav>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#items">Items</Nav.Link>
      <Nav.Link href="#blogs">Blogs</Nav.Link>
      <Nav.Link href="#sign in">Sign In</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
};

export default Header;
