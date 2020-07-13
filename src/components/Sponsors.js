import React from "react"
import { Container, Row, Col } from 'reactstrap';
import {MDBAnimation } from "mdbreact"

class Sponsors extends React.Component{
    componentDidMount(){
        document.querySelectorAll(".anime-links").forEach(x=>{
            x.style.color="black";
          this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);

          })
          document.addEventListener("scroll",()=>{
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 20) {
              document.querySelectorAll(".anime-links").forEach(x=>{
                x.style.color="white";
                this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
              })
              if ( document.querySelector(".anime-links").style.color=="rgba(255,255,255,0)") {
                document.querySelectorAll(".anime-links").forEach(x=>{
                  x.style.color="white";
                  this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
                })
              }
            } else {
              if ( document.querySelector(".anime-links").style.color!=="rgba(255,255,255,0)") {
                document.querySelectorAll(".anime-links").forEach(x=>{
                  x.style.color="black";
                  this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
                })
              if ( document.querySelector(".anime-links").style.color!=="rgba(255,255,255,0)") {
                document.querySelectorAll(".anime-links").forEach(x=>{
                  x.style.color="black";
                  this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
                })
        
              }
            }
          }})
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
  render(){
    return(
        <section id="sponsors" style={{marginTop:100}}>
           <div>
        <MDBAnimation reveal type="lightSpeedIn" >
           <h1 className="head_spons pl-lg-5 pl-1">PAST SPONSORS </h1>
          </MDBAnimation>
    <MDBAnimation reveal type="fadeInLeft" >
        <Container style={{marginTop:50 , padding:0}}>
           <Row className="justify-content-center">
               <Col lg="6" xs="12">
               <img className="spons_img" src={require("./img/sponsors/1.jpeg")} alt="Sponsors"></img>
               </Col>
               <Col lg="6" xs="12">
               <img className="spons_img2" src={require("./img/sponsors/2.jpeg")} alt="Sponsors"></img>
               </Col>
           </Row>
       </Container>
          </MDBAnimation>

        </div>
        </section>
    )
  }    
   
}

export default Sponsors
