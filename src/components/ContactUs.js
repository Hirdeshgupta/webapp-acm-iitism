import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBCard, MDBCardBody } from 'mdbreact';

const ContactUs = () => {
return (
  <div className="container-fluid " style={{marginTop:100,marginBottom:100}}>
<MDBContainer className="contact-container">
  <MDBRow className="contact-row">
    <MDBCol  md="6">
     <MDBCard className="contact-card">
      <MDBCardBody>
      <form action="mailto:acm.ism@gmail.com" method="post">
        <p className="h5 text-center mb-4 contact-head"><h3>Write to us</h3></p>
        <div className="grey-text">
          <MDBInput label="Your name"  group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email"  group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Subject"  group type="text" validate error="wrong" success="right" />
          <MDBInput type="textarea" rows="2" label="Your message"  />
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
      <div className="contact-right">
        <h2 className="contact-right-h2">Reach us at</h2>

            <span className="contact-insta"><a className="contact-anchor" href=""><i class="contact-right-icon fab fa-instagram fa-3x"></i></a><a className="contact-anchor" href="https://www.facebook.com/acm.iitismdhn"><i class="contact-right-icon fab fa-facebook-square fa-3x"></i></a></span><br />
            <span className="contact-in"><a className="contact-anchor" href="https://www.linkedin.com/company/acm-student-chapter-iit-ism-dhanbad/?originalSubdomain=in"><i class="contact-right-icon fab fa-linkedin fa-3x"></i></a><a className="contact-anchor" href="mailto:acm.ism@gmail.com"><i class="contact-right-icon far fa-envelope fa-3x"></i></a></span><br />

      </div>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</div>
);
};

export default ContactUs;
