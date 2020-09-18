import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";
import {MDBAnimation } from "mdbreact"

const TeamCard = (props) => {
  return (
    <div   className="col-sm-4 col-lg-2   mb-lg-0 mb-5 z-depth-3 hoverable p-4 mx-4 rounded">
      
      <MDBAnimation reveal type="zoomIn">
    <img
      src={require("./img/Team-Members/"+props.name+".jpg")}
      className="rounded-circle z-depth-1 img-fluid"
      alt="Sample img"
      style={{height:200,width:200}}
    />
    <h5 className="font-weight-bold mt-4 mb-3" style={{color:'#1a1245'}}>{props.name}</h5>
    <p className="text-uppercase " style={{color:'#377293'}}>{props.position}</p>
    <ul className="list-unstyled mb-0">
      {props.email &&  <a href={props.email} className="p-2 fa-lg">
      <MDBIcon far icon="envelope" style={{color:'#377293'}} />
      </a>}
      {props.linkdln &&       <a href={props.linkdln} className="p-2 fa-lg">
      <MDBIcon fab icon="linkedin" style={{color:'#377293'}} />
      </a>}

    </ul>
          </MDBAnimation>

  </div>
  );
}

export default TeamCard;