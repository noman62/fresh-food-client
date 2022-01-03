import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { logoutUser } from "../../redux/actions/userAction";

const TopBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginReducer);
  const { currentUser } = userState;
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
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
            <LinkContainer to="/cart" activeClassName>
              <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
            </LinkContainer>
            {currentUser ? (
              <LinkContainer to="/">
                <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                <LinkContainer to="/orders" activeClassName>
                <NavDropdown.Item >Orders</NavDropdown.Item>
                </LinkContainer>
                  <NavDropdown.Item onClick={() => dispatch(logoutUser())}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </LinkContainer>
            ) : (
              <>
                {" "}
                <LinkContainer to="/login" activeClassName>
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register" activeClassName>
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>{" "}
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
