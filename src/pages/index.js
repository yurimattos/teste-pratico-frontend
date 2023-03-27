import { NavDropdown, Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect, useMemo } from "react";
import PostList from "../../components/PostList";
import Sidebar from "../../components/Sidebar";

function Home() {

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand
            style={{
              transform: "translateX(-50%)",
              left: "50%",
              position: "absolute",
              fontWeight: "bold",
              color: "#333",
            }}
            href="#home"
          >
            my.Blog
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        style={{
          marginTop: "4em",
          display: "flex",
          alignContent: "center",
          width: "80%",
          margin: "60px auto",
        }}
      >
        <PostList />
        <Sidebar/>
      </div>
    </>
  );
}

export default Home;
