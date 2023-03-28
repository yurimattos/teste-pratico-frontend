import React from "react";
import { Navbar, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" style={{ height: "60px" }}>
      <Container>
        <Navbar.Brand
          style={{
            transform: "translateX(-50%)",
            left: "50%",
            position: "absolute",
            fontWeight: "bold",
            color: "#333",
          }}
          href="/"
        >
          my.Blog
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
