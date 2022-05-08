import React from "react";
import './Header.css';
import icon from '../../../images/motorcycle.ico';
import { Container, Nav, Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
  <Navbar className='header text-info'sticky="top" bg="info" >
    <Container>
    <Navbar.Brand href="#home">
      <img src={icon} alt="" />
      </Navbar.Brand>
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/items">Items</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
    </Nav>
    </Container>
  </Navbar>
  );
};

export default Header;
