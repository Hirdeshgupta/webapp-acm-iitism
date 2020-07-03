import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";
import TeamCard from "./TeamCard"
import {MDBAnimation } from "mdbreact"

const TeamPage = () => {
  return (
      <div className="container-fluid px-0 z-depth-0" style={{marginTop:150}}>
    <MDBCard className="my-5  pb-5 text-center z-depth-0 border-0">
        <MDBCardBody>
          <MDBAnimation reveal type="lightSpeedIn"  className="delay-1s">
          <h2 className="h1-responsive team_head  font-weight-bold my-5">
            OUR TEAM
          </h2>
          </MDBAnimation>
          <MDBRow className="justify-content-center  mt-5">
            <TeamCard column="6"  name="Swapnil narayan" position="Chairperson" imgURL="./img/Team-Members/Swapnil Narayan.jpg" />
            <TeamCard column="6"  name="Abhishek Raj" position="Vice Chairperson"/>
            <TeamCard name="Sahil Siyag" position="Secretary and Management Team Head"/>
          </MDBRow>
          <MDBRow className="justify-content-center  mt-5">
            <TeamCard  name="Sameer Jain" position="Treasurer" />
            <TeamCard name="Satyavart" position="Membership Chairperson"/>
            <TeamCard name="Prince Kumar" position="PR Team Head"/>
            <TeamCard name="Dhyey Mistry" position="Technical Head"/>
          </MDBRow>
          <MDBRow className="justify-content-center  mt-5">
            <TeamCard name="Ishan Thapa" position="Promotion Team Head"/>
            <TeamCard name="Akash Kulshreshtha" position="Designing Team Head"/>
            <TeamCard  name="Aditya shrivastava" position="Sponsor Team Head"/>
            <TeamCard name="Madhav Agarwal" position="Content Writing Team Head"/>
          </MDBRow>
          <MDBRow className="justify-content-center  mt-5">
            <TeamCard name="Rashmikiran pandit" position="Sponsor Team Head"/>
            <TeamCard  name="Shubhagyata Swaraj Jaiswal" position="Content Writing and Promotional Head"/>
            <TeamCard name="Saurabh Raj" position="Designing Team Head"/>
            <TeamCard name="AVINASH" position="Campus Ambassador Program Head"/>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      </div>
  );
}

export default TeamPage;
