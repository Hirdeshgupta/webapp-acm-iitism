import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";
import {MDBAnimation } from "mdbreact"

const TeamCard = (props) => {
  return (
    <MDBCol lg="2" sm="4"   className="mb-lg-0 mb-5 z-depth-3 hoverable p-4 mx-4 rounded">
      
      <MDBAnimation reveal type="zoomIn">
    <img
      src={require("./img/Team-Members/"+props.name+".jpg")}
      className="rounded-circle z-depth-1 img-fluid"
      alt="Sample img"
    />
    <h5 className="font-weight-bold mt-4 mb-3" style={{color:'#1a1245'}}>{props.name}</h5>
    <p className="text-uppercase " style={{color:'#377293'}}>{props.position}</p>
    <ul className="list-unstyled mb-0">
      <a href={props.email} className="p-2 fa-lg">
      <MDBIcon far icon="envelope" style={{color:'#377293'}} />
      </a>
    </ul>
          </MDBAnimation>

  </MDBCol>
  );
}

export default TeamCard;