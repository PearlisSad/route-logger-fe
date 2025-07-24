import React from 'react';
import { Navbar as RBNavbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <RBNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <RBNavbar.Brand as={Link} to="/">
          RouteLogger
        </RBNavbar.Brand>

        <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
        <RBNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/walls">
              Walls
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>
            <Nav.Link as={Link} to="/random">
              Random
            </Nav.Link>
          </Nav>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
}

export default Navbar;
