import React from "react"
import { Container, Row, Col } from 'reactstrap';

function Sponsors(){
    return(
        <section id="sponsors">
           <div>
           <h1 className="head_spons">Past Sponsors</h1>
       <Container>
           <Row>
               <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/sam.png")} alt="Samsung"></img></Col>
               <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/git.JPG")} alt="GitHub"></img></Col>
           </Row>
           <Row>
               <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/moz.jpg")} alt="Mozilla"></img></Col>
               <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/code_blocks.png")} alt="Coding Blocks"></img></Col>
           </Row>
           <Row>
               <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/ved.jpg")} alt="Vedanta"></img></Col>
               <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/code_ninjas.jpg")} alt="Coding Ninjas"></img></Col>
           </Row>
           <Row>
               <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/teqip.png")} alt="TEQIP"></img></Col>
               <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/geeks.png")} alt="GeeksforGeeks"></img></Col>
           </Row>
           <Row>
               <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/hackerearth.JPG")} alt="Hackerearth"></img></Col>
               <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/devfolio.JPG")} alt="Devfolio"></img></Col>
            </Row>
            <Row>   
               <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/techgig.JPG")} alt="TECHGIG"></img></Col>
               <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/foxmula.JPG")} alt="Foxmula"></img></Col>
           </Row>
           <Row>
               <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/codechef.png")} alt="Codechef"></img></Col>
               <Col xs="12" lg="6"><img className="spons_img" src={require("./img/sponsors/skillenza.png")} alt="Skillenza"></img></Col>
           </Row>
       </Container>
        </div>
        </section>
    )
}

export default Sponsors
