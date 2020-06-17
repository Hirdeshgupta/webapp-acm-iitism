import React from "react";
import Sponsors from "./Sponsors"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

function TopNav() {
  return (
    <Router>
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
    <Nav.Link className="topNav-links" href="#deets">Events</Nav.Link>
    <Nav.Link className="topNav-links" href="/sponsors">Past sponsors</Nav.Link>
    <Nav.Link className="topNav-links" href="#deets">Team</Nav.Link>
    <Nav.Link className="topNav-links" eventKey={2} href="#memes">
      Contact us
    </Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>

       <Switch>
          <Route path="/sponsors">
            <Sponsors />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default TopNav;
