import React from "react"
import { Container, Row, Col } from 'reactstrap';
import {MDBAnimation,MDBView,MDBMask } from "mdbreact"

class Sponsors extends React.Component{
    componentDidMount(){
      let num=0;
      if(window.innerWidth<992){
        document.querySelector(".hamburger").addEventListener("click",()=>{
          num++;
          if(num%2==0){
            if(document.scrollingElement.scrollTop<20){
              document.querySelector("nav").style.color="rgba(255,255,255,0)";
              document.querySelector(" .fa-bars").style.color="black";
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
            x.style.color="black";
            this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
          })
        }

        if ( document.querySelector(".anime-links").style.color!=="rgba(255,255,255,0)") {
          if(window.innerWidth>992){
          document.querySelectorAll(".anime-links").forEach(x=>{
            x.style.color="black";
            this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
          })
        }
          document.querySelector(" .fa-bars").style.color="black";

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
              document.querySelector(" .fa-bars").style.color="black";
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
        <section id="sponsors" style={{marginTop:150}}>
        <MDBAnimation reveal type="lightSpeedIn" >
          <div className="row justify-content-center ">
            <div className="col-9 col-md-4">
            <h1 className="team_head text-center head_contact pl-lg-5 pl-1">PAST SPONSORS </h1>
            </div>
          </div>
          </MDBAnimation>
          <div className="container z-depth-0 mt-0 pt-2 mb-4 px-0 pr-4" style={{background:"white"}}>
          <div className="row justify-content-around  px-md-5 my-md-5">
          <MDBView hover>
          <MDBAnimation reveal type="fadeIn">
            <div className="col-md-6  my-2 my-md-1">
              <img src={require("./img/ff/codechef.png")} className="my-3" alt=""/>
            </div>
            <MDBMask  overlay="white-light " />
            </MDBAnimation>
            </MDBView>
            <MDBView hover>
            <MDBAnimation reveal type="fadeIn">
            <div className="col-md-6 my-2 my-md-1">
              <img src={require("./img/ff/codingblocks.png")} className="my-3" alt=""/>
            </div>
            <MDBMask overlay="white-light " />
            </MDBAnimation>
            </MDBView>
            </div>
            <div className="row justify-content-around  px-md-5 ">
            <MDBView hover>
            <MDBAnimation reveal type="fadeIn">

            <div className="col-lg-6 my-2 my-md-1">
              <img src={require("./img/ff/codingninjas.png")} className="my-3" alt=""/>
            </div>
            <MDBMask  overlay="white-light " />
            </MDBAnimation>

            </MDBView>
            <MDBView hover>
            <MDBAnimation reveal type="fadeIn">

            <div className="col-lg-6 my-2 my-md-1">
              <img src={require("./img/ff/devfolio.png")} className="my-3" alt=""/>
            </div>
            <MDBMask  overlay="white-light " />
            </MDBAnimation>

            </MDBView>

            </div>
            <div className="row justify-content-around  px-md-5 my-md-5">
            <MDBView hover>
            <MDBAnimation reveal type="fadeIn">

            <div className="col-lg-6 my-2 my-md-1">
              <img src={require("./img/ff/foxmula.png")} className="my-3" alt=""/>
            </div>
            <MDBMask  overlay="white-light " />
            </MDBAnimation>

            </MDBView>
            <MDBView hover>
            <MDBAnimation reveal type="fadeIn">

            <div className="col-lg-6 my-2 my-md-1">
              <img src={require("./img/ff/geeksforgeeks.png")} className="my-3" alt=""/>
            <MDBMask  overlay="white-light " />

            </div>
            </MDBAnimation>

            </MDBView>

            </div>
            
            <div className="row justify-content-around px-md-5 my-md-5">
            <MDBView hover>
            <MDBAnimation reveal type="fadeIn">

            <div className="col-lg-6 my-2 mr-4  my-md-1">
              <img src={require("./img/ff/github.png")}  className="my-3" alt=""/>
            </div>
            <MDBMask  overlay="white-light " />
            </MDBAnimation>

            </MDBView>
            <MDBView hover>
            <MDBAnimation reveal type="fadeIn">

            <div className="col-lg-6 my-2 ml-4 my-md-1">
              <img src={require("./img/ff/skillenzatransparent.png")} className="my-3" alt=""/>
            </div>
            <MDBMask  overlay="white-light " />
            </MDBAnimation>

            </MDBView>

            </div>
            <div className="row justify-content-center ">
            <MDBView hover>
            <MDBAnimation reveal type="fadeIn">

            <div className="col-lg-6 my-2 my-md-1">
              <img src={require("./img/ff/techgig.png")} className="my-3" alt=""/>
            </div>
            <MDBMask className="flex-center" overlay="white-light" />
            </MDBAnimation>
            </MDBView>

            </div>
          </div>
            
    {/* <MDBAnimation reveal type="fadeInLeft" > */}
        {/* <Container className="sponsers-container" style={{marginTop:40 , padding:0}}>
           <Row className="justify-content-center">
               <Col lg="6" className="spons_card" xs="12">
               <img className="spons_img" src={require("./img/sponsors/1.jpeg")} alt="Sponsors"></img>
               </Col>
               <Col lg="6" className="spons_card" xs="12">
               <img className="spons_img2"  src={require("./img/sponsors/2.jpeg")} alt="Sponsors"></img>
               </Col>
           </Row>
       </Container> */}
          {/* </MDBAnimation> */}

        </section>
    )
  }

}

export default Sponsors
