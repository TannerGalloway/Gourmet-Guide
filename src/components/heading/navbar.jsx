import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../css/navbar.css";

function NavbarComponent() {
  return (
    <div className="heading">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className="link">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="link">
              About
            </Nav.Link>
            <Nav.Link href="/videos" className="link">
              Videos
            </Nav.Link>
            <Nav.Link href="/popularrecipes" className="link">
              Recipes
            </Nav.Link>
            <Nav.Link href="/categories" className="link">
              Categories
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
