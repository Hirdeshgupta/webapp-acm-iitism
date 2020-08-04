import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { setGlobalCssModule } from "reactstrap/lib/utils";


class TopNav extends React.Component {
constructor(props){
  super(props);
  this.state={
    background:"rgba(255,255,255,0)",
    color:"white",
    height:"auto",
    hamburger: "white",
    // isOpen: false
  }
  
  // this.handleDocumentClick=this.handleDocumentClick.bind(this);
  // this.toggle=this.toggle.bind(this);
}

componentDidMount(){



  document.addEventListener('click', this.handleDocumentClick, true);

  if(window.innerWidth<992){
    document.querySelector(".hamburger").addEventListener("click",()=>{
      if(this.state.background=="rgba(255,255,255,0)"){
        this.setState({background:"#1a1245",color:"white"});
        document.querySelector(" .fa-bars").style.color="white";

      }
      else if (this.state.background=="#1a1245"){
        this.setState({background:"rgba(255,255,255,0)",color:"black"})
        document.querySelector(" .fa-bars").style.color="white";

      }
    })
  }
  document.addEventListener("scroll",()=>{
    let scrolled = document.scrollingElement.scrollTop;
    if (scrolled >= 20) {
      if (this.state.background == "rgba(255,255,255,0)") {
        this.setState({ background: " #1a1245",color:"white",height:"70", hamburger: "white" });
        this.setState({ background: " #1a1245", color: "white",height:"70", hamburger: "white" });
        this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
      }
    } else {
      if (this.state.background !== "rgba(2,3,4,0)") {
        this.setState({ background: "rgba(2,3,4,0)",color:"white",height:"auto",hamburger: "white"  });
        this.setState({ background: "rgba(2,3,4,0)", color: "white",height:"auto",hamburger: "white"  });
        this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
      if (this.state.background !== "rgba(255,255,255,0)") {
        this.setState({ background: "rgba(255,255,255,0)",color:"white",height:"auto", hamburger: "white"  });
        this.setState({ background: "rgba(255,255,255,0)", color: "white",height:"auto", hamburger: "white"  });
        this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);

      }
    }
  }
})
let num=0;
if(window.innerWidth<992){
  document.querySelector(".hamburger").addEventListener("click",()=>{
    num++;
    if(num%2==0){
      if(document.scrollingElement.scrollTop<20){
        document.querySelector("nav").style.color="rgba(255,255,255,0)";
        document.querySelector(" .fa-bars").style.color="white";
      }
    }
    else{
      document.querySelector(" .fa-bars").style.color="white";
    }
  })
}
document.querySelector(" .fa-bars").style.color="black";
if(window.innerWidth>992){
document.querySelectorAll(".anime-links").forEach(x=>{
x.style.color="black";
this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
})
}
document.addEventListener("scroll",()=>{
let scrolled = document.scrollingElement.scrollTop;
if (scrolled >= 20) {
  document.querySelectorAll(".anime-links").forEach(x=>{
    x.style.color="white";
    this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
  })
 document.querySelector(" .fa-bars").style.color="white";

  if ( document.querySelector(".anime-links").style.color=="rgba(255,255,255,0)") {
    document.querySelectorAll(".anime-links").forEach(x=>{
      x.style.color="white";
      this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
    })
 document.querySelector(" .fa-bars").style.color="white";

  }
} else {

  if ( document.querySelector(".anime-links").style.color!=="rgba(255,255,255,0)") {
    if(window.innerWidth>992){
    document.querySelectorAll(".anime-links").forEach(x=>{
      x.style.color="white";
      this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
    })
  }

  if ( document.querySelector(".anime-links").style.color!=="rgba(255,255,255,0)") {
    if(window.innerWidth>992){
    document.querySelectorAll(".anime-links").forEach(x=>{
      x.style.color="white";
      this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
    })
  }
    document.querySelector(" .fa-bars").style.color="white";

  }
}
if(num%2!=0){
  if(window.innerWidth<992){
    document.querySelector(".fa-bars").style.color="white";
    document.querySelector("nav").style.background="#1a1245";
        let num=0;
  document.querySelector(".hamburger").addEventListener("click",()=>{
    num++;
    if(num%2!=0){
      console.log("hello")
      if(document.scrollingElement.scrollTop<20){
        document.querySelector("nav").style.background="rgba(255,255,255,0)";
        document.querySelector(" .fa-bars").style.color="white";
      }
    }
    else{
      document.querySelector("nav").style.background="#1a1245";
      document.querySelector(" .fa-bars").style.color="white";
      document.querySelectorAll(".anime-links").forEach(x=>{
        x.style.color="white";
        this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
      })
    }
  })
  }
}
if(num%2==0){
  document.querySelector("nav").style.background="rgba(255,255,255,0)";
}
}})
if(window.innerWidth>992){
  document.querySelectorAll(".anime-links").forEach(x=>{
    x.style.color="white";
    this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
  })
}
document.querySelector(" .fa-bars").style.color="white";
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
  // toggle = () => {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   })
  // }

  // handleDocumentClick(e) {
  //   const container = this._element;
  //   if (e.target !== container && !container.contains(e.target)) {
  //     this.toggle();
  //   }
  // }
  return (
<div ref={(c)=> (this._element = c)}>
<Navbar id="navbar"  className="z-depth-1 nav-background" collapseOnSelect expand="lg" fixed="top" style={{background:this.state.background,height:this.state.height,color:this.state.color}}  >
    <Navbar.Brand href="#home">  <a href="/"><img className="nav-logo" src={require("./img/logo.jpg")} alt="ACM"/></a> </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="hamburger"><i class="fas fa-bars toggler" style={{color: this.state.hamburger}}></i> </Navbar.Toggle>
    <Navbar.Collapse  id="responsive-navbar-nav"  className="hamburger">
    <Nav className="mr-auto" >
  </Nav>
  <Nav>
  <Nav.Link className="topNav-links anime-links" style={{color:this.state.color}} onMouseOver={this.handlemouseover} onMouseOut={this.handlemouseout}  eventKey={1} href="/">
    Home
  </Nav.Link>
    <Nav.Link className="topNav-links anime-links" style={{color:this.state.color}}  onMouseOver={this.handlemouseover} onMouseOut={this.handlemouseout}  eventKey={3} href="/events">
      Events
    </Nav.Link>
    <Nav.Link className="topNav-links anime-links" style={{color:this.state.color}}  onMouseOver={this.handlemouseover} onMouseOut={this.handlemouseout}  eventKey={3} href="/achievements">
      Achievements
    </Nav.Link>
    <Nav.Link className="topNav-links anime-links" style={{color:this.state.color}}  onMouseOver={this.handlemouseover} onMouseOut={this.handlemouseout} eventKey={4} href="/sponsors">
      Past Sponsors
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
</div>
  );
}
}


export default TopNav;
