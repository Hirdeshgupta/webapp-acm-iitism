import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";

const TeamCard = (props) => {
  return (
    <MDBCol lg="2" sm="4"   className="mb-lg-0 mb-5 z-depth-2 p-4 mx-4 rounded">
    <img
      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
      className="rounded-circle z-depth-1 img-fluid"
      alt="Sample img"
    />
    <h5 className="font-weight-bold mt-4 mb-3">Anna Williams</h5>
    <p className="text-uppercase blue-text">Graphic designer</p>
    <ul className="list-unstyled mb-0">
      <a href="#!" className="p-2 fa-lg">
        <MDBIcon fab icon="facebook-f" className="blue-text" />
      </a>
      <a href="#!" className="p-2 fa-lg">
        <MDBIcon fab icon="twitter" className="blue-text" />
      </a>
      <a href="#!" className="p-2 fa-lg">
        <MDBIcon fab icon="instagram" className="blue-text" />
      </a>
    </ul>
  </MDBCol>
  );
}

export default TeamCard;