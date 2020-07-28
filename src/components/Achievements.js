import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import {MDBAnimation } from "mdbreact"
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


class Achievements extends React.Component{
    componentDidMount(){
      let num=0;
      if(window.innerWidth<992){
        document.querySelector(".hamburger").addEventListener("click",()=>{
          num++;
          if(num%2==0){
            if(document.scrollingElement.scrollTop<20){
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
      document.querySelector(" .fa-bars").style.color="black";

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
            <section style={{marginTop:150}}>
              <MDBAnimation reveal type="lightSpeedIn" >
          <div className="row justify-content-center ">
            <div className="col-9 col-md-4">
            <h1 className="team_head text-center head_contact pl-lg-5 pl-1 achieve">ACHIEVEMENTS</h1>
            </div>
          </div>
          </MDBAnimation>
               <div>
                   <Container style={{marginTop:"45px"}}>
                   <MDBAnimation reveal type="zoomIn">
                       <Row>
                           <Col lg="6" xs="12">
                               <MDBCardImage className="img-fluid"  src={require("./img/achieve/icpc.png")} waves />
                           </Col>
                           <Col lg="6" xs="12">
                           <MDBCardBody>
                                <MDBCardTitle>ICPC Asia-West Continent Final</MDBCardTitle>
                                <MDBCardText className="pre gs" style={{color:"black"}}>
                                    <Row >
                                    <Col lg="6" xs="12">
                                    1) Astralix:<br/>
                                    Harman Kahlon<br/>
                                    Ankur Dua<br/>
                                    Anurag Singh<br/><br/>
                                    </Col>
                                <Col lg="6" xs="12">
                                2) One_Last_Time:<br/>
                                    Srijan Jaiswal<br/>
                                    Kaleem Ahmad<br/>
                                    Sahil Anand<br/>
                                </Col>
                                </Row>
                                </MDBCardText>
                                </MDBCardBody>
                           </Col>
                       </Row>
                       </MDBAnimation>
                   </Container>
                   <Container style={{marginTop:"45px"}}>
                   <MDBAnimation reveal type="zoomIn">
                       <Row>
                       <Col lg="4" xs="12">
                               <MDBCardImage className="img-fluid icpcc" src={require("./img/achieve/icpc.png")} waves />
                           </Col>
                           <Col lg="8" xs="12">
                           <MDBCardBody>
                                <MDBCardTitle>ICPC Regionals</MDBCardTitle>
                                <MDBCardText className="pre">
                                    <Row>
                                      <Col lg="4" xs="12" style={{margin:"8px 0",color:"black"}}>
                                      1)  Astralix:<br/>
                                    (Kanpur, Gwalior)<br/>
                                    Harman Kahlon<br/>
                                    Ankur Dua<br/>
                                    Anurag Singh<br/>
                                      </Col>
                                      <Col lg="4" xs="12" style={{margin:"8px 0",color:"black"}}>
                                      2)  Andhera_Kayam_Rahe:<br/>
                                    (Kharagpur, Amritapuri) <br/>
                                    Prashant Mittal<br/>
                                    Ayush Bansal<br/>
                                    Madhur Chauhan<br/>
                                      </Col>
                                      <Col lg="4" xs="12" style={{margin:"8px 0",color:"black"}}>
                                      3)  Skullcandy:<br/>
                                    (Kanpur, Amritapuri)<br/>
                                    Vibhor Shukla<br/>
                                    Saksham Gupta<br/>
                                    Faizan Amjad<br/>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg="4" xs="12" style={{margin:"8px 0",color:"black"}}>
                                      4)  kangra308:<br/>
                                    (Gwalior, Amritapuri)<br/>
                                    Saurav Kumar<br/>
                                    Amit Singh<br/>
                                    Shubhanshu Chauhan<br/>
                                      </Col>
                                      <Col lg="4" xs="12" style={{margin:"8px 0",color:"black"}}>
                                      5)  Mushroom Boys:<br/>
                                    (Amritapuri)<br/>
                                    Pawan Dogra<br/>
                                    Apurv Mayank<br/>
                                    Vishal Som<br/>
                                      </Col>
                                      <Col lg="4" xs="12" style={{margin:"8px 0",color:"black"}}>
                                      6) One_Last_Time:<br/>
                                    (Amritapuri)<br/>
                                    Srijan Jaiswal<br/>
                                    Kaleem Ahmad<br/>
                                    Sahil Anand<br/>
                                      </Col>
                                    </Row>
                                </MDBCardText>
                                </MDBCardBody>
                           </Col>

                       </Row>
                       </MDBAnimation>
                   </Container>
                   <Container style={{marginTop:"45px"}}>
                   <MDBAnimation reveal type="zoomIn">
                       <Row>
                           <Col lg="6" xs="12">
                               <MDBCardImage className="img-fluid"  src={require("./img/achieve/flip.webp")} waves />
                           </Col>
                           <Col lg="6" xs="12">
                           <MDBCardBody>
                                <MDBCardTitle>Flipkart Grid</MDBCardTitle>
                                <MDBCardText className="pre" style={{color:"black"}}>
                                  No-Mo Team:<br></br>
                                  Aman Deep Singh(ECE)<br></br>
                                  Abhay Gaur(CSE)<br></br>
                                  AdityaSharma(CSE)<br></br>
                                </MDBCardText>
                                </MDBCardBody>
                           </Col>
                       </Row>
                       </MDBAnimation>
                   </Container>
                   <Container style={{marginTop:"45px"}}>
                   <MDBAnimation reveal type="zoomIn">
                       <Row>
                       <Col lg="6" xs="12">
                               <MDBCardImage className="img-fluid"  src={require("./img/achieve/gsoc.png")} waves />
                           </Col>
                           <Col lg="6" xs="12">
                           <MDBCardBody>
                                <MDBCardTitle>Google Summer of Code (GSoC) -2020</MDBCardTitle>
                                <MDBCardText className="pre gs" style={{color:"black"}}>
                                1. Abhinav Bajpai (DD CSE)  <br></br>
                                2. Naveen Jain (CSE)<br></br>
                                3. Rishabh Agarwal ( M&C)<br></br>
                                4. Dhrubojyoti Biswas (M&C)<br></br>
                                5. Rahul Katiyar (M.Tech CSE)<br></br>
                                </MDBCardText>
                                </MDBCardBody>
                           </Col>

                       </Row>
                       </MDBAnimation>
                   </Container>
              </div>
            </section>
        )
      }

    }

export default Achievements
