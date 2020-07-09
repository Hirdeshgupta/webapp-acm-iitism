import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { setGlobalCssModule } from "reactstrap/lib/utils";


class TopNav extends React.Component {

    state={
      background:"white",
      color:"black",
      height:"auto",
    }

  componentDidMount(){

    document.addEventListener("scroll",()=>{
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 20) {
        if (this.state.background == "white") {
          this.setState({ background: " #1a1245",color:"white",height:"70" });
          this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
        }
      } else {

        if (this.state.background !== "rgba(2,3,4,0)") {
          this.setState({ background: "rgba(2,3,4,0)",color:"black",height:"auto"  });
          this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);

        if (this.state.background !== "white") {
          this.setState({ background: "white",color:"black",height:"auto"  });

        }
      }
    }
    })
this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
  }
  animeLinkChangeColor(color){
    var addRule = (function (style) {
      var sheet = document.head.appendChild(style).sheet;
      return function (selector, css) {
          var propText = typeof css === "string" ? css : Object.keys(css).map(function (p) {
              return p + ":" + (p === "content" ? "'" + css[p] + "'" : css[p]);
          }).join(";");
          sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
      };
  })(document.createElement("style"));

  addRule(".anime-links::after", {
      background:color ,
  });
  }
  handlemouseover(event){
    event.target.classList.add("anime-linksanime")
  }
  handlemouseout(event){
    event.target.classList.remove("anime-linksanime")
  }

render(){

  return (
    <Navbar id="navbar"  className="z-depth-1"  collapseOnSelect expand="lg"  fixed="top" style={{background:this.state.background,height:this.state.height}}  >
    <Navbar.Brand href="#home">  <a href="/"><img className="nav-logo" src={require("./img/logo.jpg")} alt="ACM"/></a> </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" >
  </Nav>
  <Nav>
  <Nav.Link className="topNav-links anime-links" style={{color:this.state.color}} onMouseOver={this.handlemouseover} onMouseOut={this.handlemouseout}  eventKey={1} href="/">
    Home
  </Nav.Link>
    <Nav.Link className="topNav-links anime-links" style={{color:this.state.color}}  onMouseOver={this.handlemouseover} onMouseOut={this.handlemouseout}  eventKey={3} href="/events">
      Events
    </Nav.Link>
    <Nav.Link className="topNav-links anime-links" style={{color:this.state.color}}  onMouseOver={this.handlemouseover} onMouseOut={this.handlemouseout} eventKey={4} href="/sponsors">
      Past sponsers
    </Nav.Link>
    <Nav.Link className="topNav-links anime-links" style={{color:this.state.color}}  onMouseOver={this.handlemouseover} onMouseOut={this.handlemouseout} eventKey={5} href="./TeamPage">
      Team
    </Nav.Link>
    <Nav.Link className="topNav-links anime-links" style={{color:this.state.color}}  onMouseOver={this.handlemouseover} onMouseOut={this.handlemouseout} eventKey={6} href="/ContactUs">
      Contact us
    </Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>
  );
}
}


export default TopNav;
