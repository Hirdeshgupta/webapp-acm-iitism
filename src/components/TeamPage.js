import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";
import TeamCard from "./TeamCard"
import {MDBAnimation } from "mdbreact"

const TeamPage = () => {
  return (
      <div className="container-fluid px-0 z-depth-0" style={{marginTop:100}}>
    <MDBCard className="my-5  pb-5 text-center z-depth-0 border-0">
        <MDBCardBody>
          <MDBAnimation reveal type="lightSpeedIn" >
          <h2 className="h1-responsive team_head  font-weight-bold my-5">
            OUR TEAM
          </h2>
          </MDBAnimation>
          <MDBRow className="justify-content-center  mt-5">
            <TeamCard column="6"  name="Madhulika Mohanty" position="Faculty Coordinator"  email=""/>
          </MDBRow>
          <MDBRow className="justify-content-center  mt-5">
            <TeamCard column="6"  name="Swapnil narayan" position="Chairperson"   email="mailto:swapism7@gmail.com"/>
            <TeamCard column="6"  name="Abhishek Raj" position="Vice Chairperson" email="mailto:abhishekraj29011998@gmail.com"/>
          </MDBRow>
          <MDBRow className="justify-content-center  mt-5">
            <TeamCard name="Sahil Siyag" position="Secretary and Management Team Head" email="mailto:sahilsiyag88@gmail.com"/>
            <TeamCard  name="Sameer Jain" position="Treasurer"  email="mailto:sameer2000jain12@gmail.com"/>
            <TeamCard name="Satyavart" position="Membership Chairperson" email="mailto:genrousurfer@gmail.com"/>
          </MDBRow>
          <MDBRow className="justify-content-center  mt-5">
            <TeamCard name="Prince Kumar" position="PR Team Head" email="mailto:princegup678@gmail.com"/>
            <TeamCard name="Dhyey Mistry" position="Technical Head" email="mailto:dhyeybm@gmail.com"/>
            <TeamCard name="Ishan Thapa" position="Promotion Team Head" email="mailto:ishanthapa2607@gmail.com"/>
            <TeamCard name="Madhav Agarwal" position="Content Writing Team Head" email="mailto:Madhav.21.2k@gmail.com"/>
          </MDBRow>
          <MDBRow className="justify-content-center  mt-5">
            <TeamCard name="Rashmikiran pandit" position="Sponsor Team Head" email="mailto:panditrk2000@gmail.com"/>
            <TeamCard  name="Shubhagyata Swaraj Jaiswal" position="Content Writing and Promotional Head" email="mailto:Shubhagytaswaraj@gmail.com"/>
            <TeamCard name="Saurabh Raj" position="Designing Team Head" email="mailto:saurabhraj.18je0747@pe.iitism.ac.in"/>
            <TeamCard name="AVINASH" position="Campus Ambassador Program Head" email="mailto:avinash21997@gmail.com"/>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      <MDBCard className=" pb-5 text-center z-depth-0 border-0">
        <MDBCardBody>
          <MDBAnimation reveal type="lightSpeedIn" >
          <h2 className="h1-responsive team_head  font-weight-bold my-5">
            DEVELOPERS
          </h2>
          </MDBAnimation>
          <MDBRow className="justify-content-center  mt-5">
            <TeamCard column="6"  name="Hirdesh Gupta" position="Web Developer"  email="mailto:hirdeshgupta16@gmail.com"/>
            <TeamCard column="6"  name="Aakash Kumar Singh" position="Web Developer" email="mailto:aksingh01ak@gmail.com"/>
            <TeamCard name="Yash Vardhan" position="Web Developer" email="mailto:yashvardhan513@gmail.com"/>
          </MDBRow>
          <MDBRow className="justify-content-center  mt-5">
            <TeamCard  name="Aashisha Singh" position="App Developer" email="" />
            <TeamCard name="Akshat Tripathi" position="App Developer" email="mailto:akshatofficial2019@gmail.com"/>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      </div>
  );
}

export default TeamPage;
