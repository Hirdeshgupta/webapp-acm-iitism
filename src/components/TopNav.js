import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

function TopNav() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="#home">  <a href="https://ism.acm.org/"><img className="nav-logo" src={require("./img/logo.jpg")} alt="ACM"/></a> </Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">


  </Nav>
  <Nav>
    <Nav.Link className="topNav-links" href="#deets">Home</Nav.Link>
    <Nav.Link className="topNav-links" href="#deets">About</Nav.Link>
    <Nav.Link className="topNav-links" href="#deets">Team</Nav.Link>
    <Nav.Link className="topNav-links" href="#deets">Events</Nav.Link>
    <Nav.Link className="topNav-links" href="#deets">Contact us</Nav.Link>
    <Nav.Link className="topNav-links" eventKey={2} href="#memes">
      Past sponsers
    </Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>
    </div>
  );
}

export default TopNav;
