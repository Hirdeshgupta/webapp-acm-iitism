import React from "react";
import {MDBAnimation, MDBContainer,MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import { MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ContactPage extends React.Component {
  state = {
      modal: false,
      showModal: false,
      name: false,
      email: false,
      subject: false,
      message: false
    }



  toggle = () => {
    return(
      this.setState({
       modal: !this.state.modal,
     })
    )
}

 setModal = () => {

   this.setState({
     showModal: !this.state.showModal,
   })
 }


 handleName = () => {
   this.setState({
     name: true
   })
 }
 handleEmail = () => {
   this.setState({
     email: true
   })
 }
 handleSubject = () => {
   this.setState({
     subject: true
   })
 }
 handleMessage = () => {
   this.setState({
     message: true
   })
 }

  render() {
  return (
    <section style={{marginTop:120}}>
      <MDBAnimation reveal type="lightSpeedIn" >
           <h1 className="head_spons pl-lg-5 pl-1">CONTACT US</h1>
      </MDBAnimation>
      <MDBRow  className="justify-content-center align-items-center mt-5">
        <div  className="col-lg-4  lg-0 mb-4">
      <MDBAnimation reveal type="fadeInLeft" >

          <MDBCard className="mail-card">
            <MDBCardBody>
            <div  style={{width:"100%"}}>
              <div className="form-header  accent-1 z-depth-1" style={{background:"#377293"}}>
              <div className="row justify-content-center">
                <h3 className="mt-2 col-10 col-sm-6  white-text">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
                </div>
              </div>
              </div>
      <form action="mailto:acm.ism@gmail.com" method="post" className=" mail-form">
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
                  onChange={this.handleName}
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
                  onChange={this.handleEmail}
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
                  onChange={this.handleSubject}
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Your Message"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                  onChange={this.handleMessage}
                />
              </div>
    {this.state.name && this.state.message && this.state.email && this.state.subject ? <MDBBtn className="formbtn" color="white-text py-2 px-4" onClick={this.setModal} style={{fontSize:"1.25rem",color:"white" ,background:"#377293"}}>Submit <MDBIcon icon="paper-plane" /></MDBBtn> : null}            
      </ form >

            </MDBCardBody>
          </MDBCard>
        </MDBAnimation>
        </div>

        <div  className="col-12 col-lg-5 lg-0 mb-4 contact-card">
        <MDBAnimation reveal type="fadeInRight" >
          <div className="contact-social">
            <div className="reach-us"><h3>Reach Us at</h3></div>
            <div className="contact-links">
              <h5 className="social-handles"><a href="https://www.facebook.com/acm.iitismdhn" className="link-anchor"><button tag="a" floating className="socialbtn"  >
                <MDBIcon fab icon="facebook-f" size="lg" />
              </button><span className="contact-icon-text">@acm.iitismdhn</span></a></h5>
              <h5 className="social-handles"><a href="https://instagram.com/acm_iitism?igshid=1h4g8ng88jmbl" className="link-anchor"><button tag="a" floating className="socialbtn" href="" >
              <MDBIcon fab icon="instagram" size="lg" />
              </button><span className="contact-icon-text">@acm_iitism</span></a></h5>
              <h5 className="social-handles"><a href="https://www.linkedin.com/company/acm-student-chapter-iit-ism-dhanbad/" className="link-anchor"><button tag="a" floating className="socialbtn"  >
                <MDBIcon fab icon="linkedin-in" size="lg" />
              </button><span className="contact-icon-text">@acm.iitism</span></a></h5>
              <h5 className="social-handles"><a href="https://www.youtube.com/channel/UCaXEPdTHm08sxKlTJjRVxJA" className="link-anchor"><button tag="a" floating className="socialbtn"  >
                <MDBIcon fab icon="youtube" size="lg" />
              </button><span className="contact-icon-text">@acmiitdhn</span></a></h5>
            </div>
          </div>
          </MDBAnimation>
        </div>

        </MDBRow>
        <MDBRow className="map-row">
        <MDBCol>
      <MDBAnimation   reveal type="fadeInRight" >
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "500px" }}
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

      </MDBAnimation>

        </MDBCol>
      </MDBRow>

      {
        this.state.showModal ?  <MDBContainer>

        <MDBModal isOpen={this.state.showModal} toggle={this.setModal}>
          <MDBModalHeader toggle={this.setModal}>Thanks for contacting us!</MDBModalHeader>
          <MDBModalBody>
            We'll get back to you soon :)
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.setModal}>Close</MDBBtn>

          </MDBModalFooter>
        </MDBModal>
      </MDBContainer> : null
      }



    </section>
  );
}
}

export default ContactPage;
