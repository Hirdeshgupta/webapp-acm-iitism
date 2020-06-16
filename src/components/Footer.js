import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'



function Footer(){
  return (
    // Footer starts 
<section id="footer">

   <Container fluid>
   <Row> 
      <Col xs="12" lg="4">
      <div className="footer-acm">
           <div className="picc">
             <a href="https://ism.acm.org/"><img className="logoo" src={require("./img/logo.jpg")} alt="ACM"/></a>
                   <a href="https://www.iitism.ac.in/"><img className="logoo1" src={require('./img/clg-logo.jpg')} alt="IIT Dhanbad"/></a>
           </div>
                   <p>
                     Association for Computing Machinery <br/>
                     IIT Dhanbad
                    </p>
        </div>
      </Col>
        
        <Col xs="12" lg="4">
        <div className="location1">
               <h3 className="footer-h3">Location</h3>
               <p className="location2">Department of Computer Science and Engineering,
              Indian Institute of Technology (IIT)
              Dhanbad, India - 826004</p>
         </div>
        </Col>
            
         <Col xs="12" lg="4">
         <h3 className="footer-h3">Get In Touch</h3>
             <div className="icons_uni">
              <a className="foot_icon" href="mailto:acm.ism@gmail.com">
             <img src={require("./img/mail.gif")} alt="Mail"/></a>
             &nbsp;&nbsp;&nbsp;
             <a className="foot_icon" href="https://www.linkedin.com/company/acm-student-chapter-iit-ism-dhanbad/">
             <img src={require("./img/linkedin.png")} alt="Linkedin"/></a>
             &nbsp;&nbsp;&nbsp;
             <a className="foot_icon" href="https://www.facebook.com/acm.iitismdhn">
              <img src={require("./img/fb.png")} alt="Facebook"/></a>
             &nbsp;&nbsp;&nbsp;
             <a className="foot_icon" href="https://www.youtube.com/channel/UCaXEPdTHm08sxKlTJjRVxJA">
              <img src={require("./img/utube.png")} alt="You Tube"/></a>
           </div> 
         </Col>
         </Row>
           
       <hr/>
    <div className="foot">
      <p>Made with &nbsp;<FontAwesomeIcon icon={faHeart}/>&nbsp; by ACM-IIT Dhanbad<br/>ACM Student Chapter - IIT Dhanbad · © 2017</p>
     </div> 
   
   </Container>
     

</section>

  )
}

export default Footer;