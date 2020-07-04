import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
class TopNav extends React.Component {
    state={
      background:"rgba(2,3,4,0)",
      color:"white",
      height:"auto"
    }

  componentDidMount(){
    document.addEventListener("scroll",()=>{
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 20) {
        if (this.state.background == "rgba(2,3,4,0)") {
          this.setState({ background: " #1a1245",color:"white",height:"70" });
        }
      } else {
        if (this.state.background !== "rgba(2,3,4,0)") {
          this.setState({ background: "rgba(2,3,4,0)",color:"white",height:"auto"  });
        }
      }
    })
  }

render(){
  return (
    <Navbar id="navbar"  className="z-depth-1"  collapseOnSelect expand="lg"    fixed="top" style={{background:this.state.background,height:this.state.height}}  >
    <Navbar.Brand href="#home">  <a href="/"><img className="nav-logo" src={require("./img/logo.jpg")} alt="ACM"/></a> </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" >
  </Nav>
  <Nav>
  <Nav.Link className="topNav-links" style={{color:this.state.color}} onMouseOver={this.handlemouseover}  eventKey={1} href="/">
    Home
  </Nav.Link>
    <Nav.Link className="topNav-links" style={{color:this.state.color}}  eventKey={3} href="/events">
      Events
    </Nav.Link>
    <Nav.Link className="topNav-links" style={{color:this.state.color}}  eventKey={4} href="/sponsors">
      Past sponsers
    </Nav.Link>
    <Nav.Link className="topNav-links" style={{color:this.state.color}}  eventKey={5} href="./TeamPage">
      Team
    </Nav.Link>
    <Nav.Link className="topNav-links" style={{color:this.state.color}}  eventKey={6} href="/ContactUs">
      Contact us
    </Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>
  );
}
}


export default TopNav;
