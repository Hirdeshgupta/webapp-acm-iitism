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
    componentDidMount(){
      document.querySelector(" .fa-bars").style.color="black";

      let num=0;
      if(window.innerWidth<992){
        document.querySelector(".hamburger").addEventListener("click",()=>{
          num++;
          if(num%2==0){
            if(document.scrollingElement.scrollTop<20){
              document.querySelector(" .fa-bars").style.color="black";
            }
          }
          else{
            document.querySelector(" .fa-bars").style.color="white";
          }
        })
      }

        if(window.innerWidth>992){
          document.querySelectorAll(".anime-links").forEach(x=>{
            x.style.color="black";
            this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);

          })
        }

      document.addEventListener("scroll",()=>{
        let scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 20) {
          document.querySelectorAll(".anime-links").forEach(x=>{
            x.style.color="white";
            this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
          })
      document.querySelector(" .fa-bars").style.color="white";
          if ( document.querySelector(".anime-links").style.color=="rgba(255,255,255,0)") {
            document.querySelectorAll(".anime-links").forEach(x=>{
              x.style.color="white";
              this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
            })
      document.querySelector(" .fa-bars").style.color="white";

          }
        } else {
          if ( document.querySelector(".anime-links").style.color!=="rgba(255,255,255,0)") {
            if(window.innerWidth>992){
            document.querySelectorAll(".anime-links").forEach(x=>{
              x.style.color="black";
              this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
            })
          }
      document.querySelector(" .fa-bars").style.color="black";

          if ( document.querySelector(".anime-links").style.color!=="rgba(255,255,255,0)") {
            if(window.innerWidth>992){
            document.querySelectorAll(".anime-links").forEach(x=>{
              x.style.color="black";
              this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
            })
          }
          document.querySelector(" .fa-bars").style.color="black";

          }
        }
      }})
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
 animeLinkChangeColor(color){
  var addRule = (function (style) {
    var sheet = document.head.appendChild(style).sheet;
    return function (selector, css) {
        var propText = typeof css === "string" ? css : Object.keys(css).map(function (p) {
            return p + ":" + (p === "content" ? "'" + css[p] + "'" : css[p]);
        }).join(";");
        sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
    };
})(document.createElement("style"));

addRule(".anime-links::after", {
    background:color ,
});
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
           <h1 className="head_spons head_contact pl-lg-5 pl-1">CONTACT US</h1>
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
      <form action="mailto:acm.ism@gmail.com" method="post" encType="text/plain" className=" mail-form">
              <div className="md-form">
              <i class="far fa-user"></i><input className="form-input" type="text" placeholder="Your name" onChange={this.handleName} name="name" autocomplete="off" />
              </div>

              <div className="md-form">
              <i class="far fa-envelope"></i><input className="form-input" type="email" placeholder="Your email" onChange={this.handleEmail} name="Email" autocomplete="off"/>
              </div>

              <div className="md-form">
              <i class="far fa-sticky-note"></i><input className="form-input" type="text" placeholder="Subject" onChange={this.handleSubject} name="Subject" autocomplete="off" />
              </div>

              <div className="md-form">
              <i class="far fa-comment-dots"></i><input className="form-input" type="text" placeholder="Message" onChange={this.handleMessage} name="Message" autocomplete="off"/>
              </div>
       <button type="submit" value="Submit" className="formbtn" color="white-text py-2 px-4" onClick={this.setModal} style={{fontSize:"1.25rem",color:"white" ,background:"#377293"}}>Submit <MDBIcon far icon="paper-plane" /></button>
      </ form >

            </MDBCardBody>
          </MDBCard>
        </MDBAnimation>
        </div>

        <div  className="col-12 col-lg-5 lg-0 mb-4 contact-card">
        <MDBAnimation reveal type="fadeInRight" >
          <div className="contact-social">
           <div className="reach-us">
            <div>
              <h3>Reach us at</h3>
            </div>
           </div>
            <div className="contact-links">
              <h5 className="social-handles"><a href="https://www.facebook.com/acm.iitismdhn" className="link-anchor"><button tag="a" floating className="socialbtn"  >
                <MDBIcon fab icon="facebook-f" size="lg" className="mdb-icons" />
              </button><span className="contact-icon-text">@acm.iitismdhn</span></a></h5>
              <h5 className="social-handles"><a href="https://instagram.com/acm_iitism?igshid=1h4g8ng88jmbl" className="link-anchor"><button tag="a" floating className="socialbtn" href="" >
              <MDBIcon fab icon="instagram" size="lg" className="mdb-icons" />
              </button><span className="contact-icon-text">@acm_iitism</span></a></h5>
              <h5 className="social-handles"><a href="https://www.linkedin.com/company/acm-student-chapter-iit-ism-dhanbad/" className="link-anchor"><button tag="a" floating className="socialbtn"  >
                <MDBIcon fab icon="linkedin-in" size="lg" className="mdb-icons" />
              </button><span className="contact-icon-text">@acm.iitism</span></a></h5>
              <h5 className="social-handles"><a href="https://www.youtube.com/channel/UCaXEPdTHm08sxKlTJjRVxJA" className="link-anchor"><button tag="a" floating className="socialbtn"  >
                <MDBIcon fab icon="youtube" size="lg" className="mdb-icons" />
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



          this.state.showModal ?
          <MDBContainer>

          <MDBModal isOpen={this.state.showModal} toggle={this.setModal}>
            <MDBModalHeader className="modal-header" toggle={this.setModal}>{this.state.name && this.state.email && this.state.subject && this.state.message ? "Thank you for contacting us" : "All fields are necessary"}</MDBModalHeader>
            <MDBModalBody className="modal-body">
              {this.state.name && this.state.email && this.state.subject && this.state.message ? "We'll get back to you soon :)" : "Try Checking email and fill all fields!!" }
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.setModal}>Close</MDBBtn>

            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
        : null




      }



    </section>
  );
}
}

export default ContactPage;
