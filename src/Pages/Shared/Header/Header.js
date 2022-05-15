import React from "react";
import icon from "../../../images/motorcycle.ico";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="primary"
      variant="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={icon} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-1">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>
            {user ? (
              <>
                <Nav.Link
                className="ms-auto d-flex justify-content-end"
                as={Link} to="/add-items">
                  Add Items
                </Nav.Link>
                <Nav.Link as={Link} to="/my-items">
                  My Items
                </Nav.Link>
                <Nav.Link as={Link} to="/manage-items">
                  Manage Items
                </Nav.Link>

                <button
                  className="btn btn-link text-white text-decoration-none"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Nav.Link className="ms-auto" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
