import React from "react"
import { Container, Row, Col } from 'reactstrap';
import {MDBAnimation } from "mdbreact"

class Sponsors extends React.Component{
    componentDidMount(){
        document.querySelectorAll(".anime-links").forEach(x=>{
          x.style.color="black";
        })
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
