import React from "react"
import { Container, Row, Col } from 'reactstrap';
import {MDBAnimation } from "mdbreact"

function Sponsors(){
    return(
        <section id="sponsors" style={{marginTop:150}}>
           <div>
        <MDBAnimation reveal type="lightSpeedIn">
           <h1 className="head_spons pl-lg-5 pl-1">PAST SPONSORS </h1>
          </MDBAnimation>
    <MDBAnimation reveal type="fadeInLeft">
        <Container style={{marginTop:50}}>
           <Row>
               <Col lg="6" xs="12">
               <img className="spons_img" src={require("./img/sponsors/1.jpeg")} alt="Sponsors"></img>
               </Col>
               <Col lg="6" xs="12">
               <img className="spons_img2" src={require("./img/sponsors/2.jpeg")} alt="Sponsors"></img>
               </Col>
               {/* <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/sam.png")} alt="Samsung"></img></Col> */}
               {/* <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/git.JPG")} alt="GitHub"></img></Col> */}
               {/* <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/moz.jpg")} alt="Mozilla"></img></Col> */}
               {/* <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/code_blocks.png")} alt="Coding Blocks"></img></Col> */}
               {/* <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/ved.jpg")} alt="Vedanta"></img></Col> */}
               {/* <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/code_ninjas.jpg")} alt="Coding Ninjas"></img></Col> */}
               {/* <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/teqip.png")} alt="TEQIP"></img></Col> */}
               {/* <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/geeks.png")} alt="GeeksforGeeks"></img></Col> */}
               {/* <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/hackerearth.JPG")} alt="Hackerearth"></img></Col> */}
               {/* <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/devfolio.JPG")} alt="Devfolio"></img></Col> */} 
               {/* <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/techgig.JPG")} alt="TECHGIG"></img></Col> */}
               {/* <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/foxmula.JPG")} alt="Foxmula"></img></Col> */}
               {/* <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/codechef.png")} alt="Codechef"></img></Col> */}
               {/* <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/skillenza.png")} alt="Skillenza"></img></Col> */}
           </Row>
       </Container>
          </MDBAnimation>

        </div>
        </section>
    )
}

export default Sponsors
