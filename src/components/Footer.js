import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { MDBIcon } from "mdbreact";



function Footer(){
  return (
    // Footer starts
<section id="footer">

   <Container fluid>
   <Row>
      <Col xs="12" lg="4">
      <div className="footer-acm">
           <div className="picc">
             <a href="/"><img className="logoo" src={require("./img/logo.jpg")} alt="ACM"/></a>
                   <a href="https://www.iitism.ac.in/"><img className="logoo1" src={require('./img/clg-logo.jpg')} alt="IIT Dhanbad"/></a>
           </div>
                   <p>
                   ACM Student Chapter <br/>
                     IIT (ISM) Dhanbad
                    </p>
        </div>
      </Col>

        <Col xs="12" lg="4">
        <div className="location1">
               <h3 className="footer-h3">Location</h3>
               <p className="location2 address">Department of Computer Science and Engineering,
              IIT (ISM)
              Dhanbad, India - 826004</p>
         </div>
        </Col>

         <Col xs="12" lg="4">
         <h3 className="footer-h3">Get In Touch</h3>
             <div className="icons_uni">
              <a className="foot_icon" href="mailto:acm.ism@gmail.com">
             <img src={require("./img/footer/mail.gif")} alt="Mail"/></a>
             &nbsp;&nbsp;&nbsp;
             <a className="foot_icon" href="https://www.linkedin.com/company/acm-student-chapter-iit-ism-dhanbad/">
             <img src={require("./img/footer/linkedin.png")} alt="Linkedin"/></a>
             &nbsp;&nbsp;&nbsp;
             <a className="foot_icon" href="https://www.facebook.com/acm.iitismdhn">
              <img src={require("./img/footer/fb.png")} alt="Facebook"/></a>
             &nbsp;&nbsp;&nbsp;
             <a className="foot_icon" href="https://www.youtube.com/channel/UCaXEPdTHm08sxKlTJjRVxJA">
              <img src={require("./img/footer/utube.png")} alt="You Tube"/></a>
           </div>
         </Col>
         </Row>

    <div className="foot">
      <p>Made with &nbsp;<MDBIcon icon="heart" />&nbsp; by ACM-IIT(ISM) Dhanbad</p>
     </div>

   </Container>


</section>

  )
}

export default Footer;
