import React from "react";
import icon from "../../../images/motorcycle.ico";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <Navbar bg="primary" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={icon} alt="" />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/items">
            Items
          </Nav.Link>
          <Nav.Link as={Link} to="/blogs">
            Blogs
          </Nav.Link>
          {
            user?
            <button className="btn btn-link text-white text-decoration-none" onClick={handleSignOut}>Sign Out</button>
            :
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          }
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
