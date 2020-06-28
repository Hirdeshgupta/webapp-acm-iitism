import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";
import {MDBAnimation } from "mdbreact"

const TeamCard = (props) => {
  return (
    <MDBCol lg="2" sm="4"   className="mb-lg-0 mb-5 z-depth-3 p-4 mx-4 rounded">
      <MDBAnimation reveal type="zoomIn" className="delay-0.5s">
    <img
      src={"https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"}
      className="rounded-circle z-depth-1 img-fluid"
      alt="Sample img"
    />
    <h5 className="font-weight-bold mt-4 mb-3" style={{color:'#1a1245'}}>Anna Williams</h5>
    <p className="text-uppercase " style={{color:'#377293'}}>Graphic designer</p>
    <ul className="list-unstyled mb-0">
      <a href="#!" className="p-2 fa-lg">
        <MDBIcon fab icon="facebook-f" style={{color:'#377293'}} />
      </a>
      <a href="#!" className="p-2 fa-lg">
        <MDBIcon fab icon="twitter" style={{color:'#377293'}} />
      </a>
      <a href="#!" className="p-2 fa-lg">
        <MDBIcon fab icon="instagram" style={{color:'#377293'}} />
      </a>
    </ul>
          </MDBAnimation>

  </MDBCol>
  );
}

export default TeamCard;