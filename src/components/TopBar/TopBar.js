import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const TopBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        |
        <Container fluid>
          <h6 className="text-light">Fresh Food</h6>
          <Nav className="ms-auto">
            <LinkContainer to="/" activeClassName>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeClassName>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" activeClassName>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login" activeClassName>
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart" activeClassName>
              <Nav.Link>Cart</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
