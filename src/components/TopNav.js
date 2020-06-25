import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

class TopNav extends React.Component {
  constructor(){
    super()
    this.state={
      background:"rgba(2,3,4,0)",
      color:"rgba(0,0,0,0.5)",
    }
  }
  componentDidMount(){
    document.addEventListener("scroll",()=>{
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 20) {
        if (this.state.background == "rgba(2,3,4,0)") {
          this.setState({ background: "rgba(52, 58, 64,0.9)",color:"white" });
        }
      } else {
        if (this.state.background !== "rgba(2,3,4,0)") {
          this.setState({ background: "rgba(2,3,4,0)",color:"rgba(0,0,0,0.5)" });
        }
      }
    })
  }
render(){
  return (
    <Navbar id="navbar"  className="z-depth-0"  collapseOnSelect expand="lg"    fixed="top" style={{background:this.state.background}}  >
    <Navbar.Brand href="#home">  <a href="https://ism.acm.org/"><img className="nav-logo" src={require("./img/logo.jpg")} alt="ACM"/></a> </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" >
  </Nav>
  <Nav>
  <Nav.Link className="topNav-links" style={{color:this.state.color}}   eventKey={1} href="/">
    Home <div   className="animeline"></div>
  </Nav.Link>
    <Nav.Link className="topNav-links" style={{color:this.state.color}}  eventKey={3} href="/events">
      Events <div className="animeline"></div>
    </Nav.Link>
    <Nav.Link className="topNav-links" style={{color:this.state.color}}  eventKey={4} href="/sponsors">
      Past sponsers <div className="animeline"></div>
    </Nav.Link>
    <Nav.Link className="topNav-links" style={{color:this.state.color}}  eventKey={5} href="./TeamPage">
      Team <div className="animeline"></div>
    </Nav.Link>
    <Nav.Link className="topNav-links" style={{color:this.state.color}}  eventKey={6} href="/ContactUs">
      Contact us <div className="animeline"></div>
    </Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>
  );
}
}


export default TopNav;
