import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

function TopNav() {



  return (
    <div>
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="#home">  <a href="https://ism.acm.org/"><img className="nav-logo" src={require("./img/logo.jpg")} alt="ACM"/></a> </Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">


  </Nav>
  <Nav>
  <Nav.Link className="topNav-links" eventKey={1} href="/">
    Home
  </Nav.Link>
    <Nav.Link className="topNav-links" eventKey={2} href="#memes">
      About
    </Nav.Link>
    <Nav.Link className="topNav-links" eventKey={3} href="#memes">
      Events
    </Nav.Link>
    <Nav.Link className="topNav-links" eventKey={4} href="/sponsors">
      Past sponsers
    </Nav.Link>
    <Nav.Link className="topNav-links" eventKey={5} href="./TeamPage">
      Team
    </Nav.Link>
    <Nav.Link className="topNav-links" eventKey={6} href="#memes">
      Contact us
    </Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>

    </div>
  );
}

export default TopNav;
