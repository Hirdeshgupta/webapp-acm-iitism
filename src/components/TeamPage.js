import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";
import TeamCard from "./TeamCard"
const TeamPage = () => {
  return (
      <div className="container-fluid px-0">
    <MDBCard className="my-5  pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            OUR TEAM
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
          </p>
          <MDBRow className="justify-content-center  mt-5">
            <TeamCard column="6"/>
            <TeamCard column="6"/>
            <TeamCard/>
          </MDBRow>
          <MDBRow className="justify-content-center  mt-5">
            <TeamCard/>
            <TeamCard/>
            <TeamCard/>
            <TeamCard/>
          </MDBRow>
          <MDBRow className="justify-content-center  mt-5">
            <TeamCard/>
            <TeamCard/>
            <TeamCard/>
            <TeamCard/>
          </MDBRow>
          <MDBRow className="justify-content-center  mt-5">
            <TeamCard/>
            <TeamCard/>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      </div>
  );
}

export default TeamPage;