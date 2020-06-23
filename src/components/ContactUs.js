import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBCard, MDBCardBody } from 'mdbreact';

const ContactUs = () => {
return (
<MDBContainer className="contact-container">
  <MDBRow className="contact-row">
    <MDBCol  md="6">
     <MDBCard className="contact-card">
      <MDBCardBody>
      <form action="mailto:yash.19je0936@mech.iitism.ac.in" method="post">
        <p className="h5 text-center mb-4">Write to us</p>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
          <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
        </div>
        <div className="text-center">

          <MDBBtn outline color="secondary" type="submit">

            Send

            <i class="fab fa-telegram-plane contact-icon"></i>
          </MDBBtn>

        </div>
      </form>
      </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <div>
        <a href="https://ism.acm.org/"><img className="contact-logo" src={require("./img/logo.jpg")} alt="ACM"/></a>
      </div>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default ContactUs;
