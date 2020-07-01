import React from "react";
import {MDBAnimation, MDBContainer,MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

const ContactPage = () => {
  return (
    <section style={{marginTop:120}}>
      <MDBAnimation reveal type="lightSpeedIn" className="delay-2s">
           <h1 className="head_spons pl-lg-5 pl-1">CONTACT US</h1>
      </MDBAnimation>
      <MDBRow  className="justify-content-center mt-5">
        <MDBCol lg="5" className="lg-0 mb-4">
      <MDBAnimation reveal type="fadeInLeft" className="delay-2s">

          <MDBCard>
            <MDBCardBody>
            <div style={{position:"absolute",top:-20,width:400,zIndex:3,left:100}}>
              <div className="form-header  accent-1 z-depth-1" style={{background:"#377293"}}>
              <div className="row justify-content-center">
                <h3 className="mt-2 col-6 white-text">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
                </div>
              </div>
              </div>
      <form action="mailto:acm.ism@gmail.com" method="post">
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  group
                  id="form-name"
                  validate
                  error="wrong"
                  success="right"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Your Message"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="white-text py-2 px-4" style={{fontSize:"1.25rem",color:"white" ,background:"#377293"}}>Submit <MDBIcon icon="paper-plane" /></MDBBtn>
              </div>
      </ form >

            </MDBCardBody>
          </MDBCard>
      </MDBAnimation>
        </MDBCol>
        <MDBCol lg="6">
      <MDBAnimation className="slow delay-2s"  reveal type="fadeInRight" >
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1185838921524!2d86.43901351493429!3d23.814381884557864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bc9fac678481%3A0x122cb1d133a89995!2sIndian%20Institute%20of%20Technology%20(Indian%20School%20of%20Mines)%2C%20Dhanbad!5e0!3m2!1sen!2sin!4v1593296068669!5m2!1sen!2sin"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="3">
      <MDBAnimation  reveal type="zoomIn">
              <a href="https://www.facebook.com/acm.iitismdhn"><button tag="a" floating className="socialbtn"  >
                <MDBIcon fab icon="facebook-f" size="lg" />
              </button></a>
              <p>Facebook</p>
      </MDBAnimation>

            </MDBCol>
            <MDBCol md="3">
      <MDBAnimation  reveal type="zoomIn">

              <a href="https://www.facebook.com/acm.iitismdhn"><button tag="a" floating className="socialbtn" href="" >
              <MDBIcon fab icon="instagram" size="lg" />

              </button></a>
              <p>instagram</p>
      </MDBAnimation>

            </MDBCol>
            <MDBCol md="3">
      <MDBAnimation  reveal type="zoomIn">

              <a href="https://www.linkedin.com/company/acm-student-chapter-iit-ism-dhanbad/"><button tag="a" floating className="socialbtn"  >
                <MDBIcon fab icon="linkedin-in" size="lg" />
              </button></a>
              <p>LinkedIn</p>
      </MDBAnimation>

            </MDBCol>
              <MDBCol md="3">
      <MDBAnimation  reveal type="zoomIn">

              <a href="https://www.youtube.com/channel/UCaXEPdTHm08sxKlTJjRVxJA"><button tag="a" floating className="socialbtn"  >
                <MDBIcon fab icon="youtube" size="lg" />
              </button></a>
              <p>YouTube</p>
      </MDBAnimation>

            </MDBCol>
          </MDBRow>
      </MDBAnimation>

        </MDBCol>
      </MDBRow>

    </section>
  );
}

export default ContactPage;
