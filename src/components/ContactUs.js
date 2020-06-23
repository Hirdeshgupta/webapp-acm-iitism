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
      <div className="contact-right">
        <h1 className="contact-right-h1">Reach us at</h1>
        <a className="contact-anchor" href="">

            <span className="contact-span"><i class="contact-right-icon fab fa-instagram fa-2x"></i><h5 className="contact-h5">@acmism</h5></span>

        </a>
        <a className="contact-anchor" href="https://www.facebook.com/acm.iitismdhn">

            <span className="contact-span"><i class="contact-right-icon fab fa-facebook-f fa-2x"></i><h5 className="contact-h5">@ACM.IITISM</h5></span>

        </a>
        <a className="contact-anchor" href="">

            <span className="contact-span"><i class="contact-right-icon fab fa-linkedin fa-2x"></i><h5 className="contact-h5">@ACM_ISM</h5></span>

        </a>
        <a className="contact-anchor" href="mailto:acm.ism@gmail.com">

            <span className="contact-span"><i class="contact-right-icon far fa-envelope fa-2x"></i><h5 className="contact-h5">Mail</h5></span>
        
        </a>







      </div>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default ContactUs;
