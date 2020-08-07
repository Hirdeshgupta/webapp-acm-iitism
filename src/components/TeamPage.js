import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";
import TeamCard from "./TeamCard"
import {MDBAnimation } from "mdbreact"

class TeamPage extends React.Component {
  componentDidMount(){
    let num=0;
      if(window.innerWidth<992){
        document.querySelector(".hamburger").addEventListener("click",()=>{
          num++;
          if(num%2==0){
            if(document.scrollingElement.scrollTop<20){
              document.querySelector("nav").style.color="rgba(255,255,255,0)";
              document.querySelector(" .fa-bars").style.color="black";
            }
          }
          else{
            document.querySelector(" .fa-bars").style.color="white";
          }
        })
      }
    document.querySelector(" .fa-bars").style.color="black";
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
      if(num%2!=0){
        if(window.innerWidth<992){
          document.querySelector(".fa-bars").style.color="white";
          document.querySelector("nav").style.background="#1a1245";
              let num=0;
        document.querySelector(".hamburger").addEventListener("click",()=>{
          num++;
          if(num%2!=0){
            console.log("hello")
            if(document.scrollingElement.scrollTop<20){
              document.querySelector("nav").style.background="rgba(255,255,255,0)";
              document.querySelector(" .fa-bars").style.color="black";
            }
          }
          else{
            document.querySelector("nav").style.background="#1a1245";
            document.querySelector(" .fa-bars").style.color="white";
            document.querySelectorAll(".anime-links").forEach(x=>{
              x.style.color="white";
              this.animeLinkChangeColor(document.querySelector(".anime-links").style.color);
            })
          }
        })
        }
      }
      if(num%2==0){
        document.querySelector("nav").style.background="rgba(255,255,255,0)";
      }
    }})
    // document.querySelectorAll(".anime-links").forEach(x=>{
    //   x.style.color="black";
    // })
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
  render(){
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
          <TeamCard   name="Rajendra  Pamula" position="Faculty Sponsor"  email="	rajendra@iitism.ac.in" linkdln="https://www.linkedin.com/in/rajendra-pamula-98125a79/"/>
          <TeamCard   name="Madhulika Mohanty" position="Faculty Co-Sponsor"  email="madhulika@iitism.ac.in" linkdln="https://www.linkedin.com/in/madhulikamohanty/"/>
            <TeamCard column="6"  name="Swapnil Narayan" position="Chairperson"   email="mailto:swapism7@gmail.com" linkdln="https://www.linkedin.com/in/swapzism/"/>
            <TeamCard column="6"  name="Abhishek Raj" position="Vice Chairperson" email="mailto:abhishekraj29011998@gmail.com" linkdln="https://www.linkedin.com/in/abhishek-raj-permani-495483156/"/>
          </MDBRow>
          
          <MDBRow className="justify-content-center  mt-5">
            <TeamCard name="Sahil Siyag" position="Secretary and Management Team Head" email="mailto:sahilsiyag88@gmail.com" linkdln="https://www.linkedin.com/in/sahil-siyag-4aa893191/"/>
            <TeamCard  name="Sameer Jain" position="Treasurer"  email="mailto:sameer2000jain12@gmail.com" linkdln="https://www.linkedin.com/in/sameer-jain-882589158/"/>
            <TeamCard name="Satyavart" position="Membership Chairperson" email="mailto:genrousurfer@gmail.com" linkdln="https://www.linkedin.com/in/satyavart-b8630b173/"/>
            <TeamCard name="Prince Kumar" position="PR Team Head" email="mailto:princegup678@gmail.com" linkdln="https://www.linkedin.com/in/princegup678/"/>
          </MDBRow>
          <MDBRow className="justify-content-center  mt-5">
            <TeamCard name="Dhyey Mistry" position="Technical Head" email="mailto:dhyeybm@gmail.com" linkdln="https://www.linkedin.com/in/dhyey-mistry-859177177/'"/>
            <TeamCard name="Ishan Thapa" position="Promotion Team Head" email="mailto:ishanthapa2607@gmail.com" linkdln="https://www.linkedin.com/in/ishan-thapa-426722194/"/>
            <TeamCard name="Madhav Agarwal" position="Content Writing Team Head" email="mailto:Madhav.21.2k@gmail.com" linkdln="https://www.linkedin.com/in/madhav-agarwal-021a55180/"/>
            <TeamCard name="Rashmikiran Pandit" position="Sponsor Team Head" email="mailto:panditrk2000@gmail.com" linkdln="https://www.linkedin.com/in/rashmikiran-pandit-358196189/"/>
          </MDBRow>
          <MDBRow className="justify-content-center  mt-5">
            <TeamCard  name="Shubhagyata Swaraj Jayswal" position="Content Writing and Promotional Head" email="mailto:Shubhagytaswaraj@gmail.com" linkdln="https://www.linkedin.com/in/shubhagyta-395ab4185/"/>
            <TeamCard name="Saurabh Raj" position="Designing Team Head" email="mailto:saurabhraj.18je0747@pe.iitism.ac.in" linkdln="https://www.linkedin.com/in/saurabh-raj-aab418184/"/>
            <TeamCard name="AVINASH" position="Campus Ambassador Program Head" email="mailto:avinash21997@gmail.com" linkdln="https://www.linkedin.com/in/avinash-b904a8194/"/>
          </MDBRow>
          <MDBAnimation reveal type="lightSpeedIn" >
          <h2 className="h1-responsive team_head  font-weight-bold my-5">
            DEVELOPERS
          </h2>
          </MDBAnimation>
          <MDBRow className="justify-content-center  mt-5">
            <TeamCard column="6"  name="Hirdesh Gupta" position="Web Developer"  email="mailto:hirdeshgupta16@gmail.com" linkdln="https://www.linkedin.com/in/hirdesh-gupta-68117819a/"/>
            <TeamCard column="6"  name="Aakash Kumar Singh" position="Web Developer" email="mailto:aksingh01ak@gmail.com" linkdln="https://www.linkedin.com/in/aakash-kumar-singh-b60a4219b"/>
            <TeamCard name="Yash Vardhan" position="Web Developer" email="mailto:yashvardhan513@gmail.com" linkdln="https://www.linkedin.com/in/yash-vardhan-688952188"/>
            <TeamCard  name="Sameer Jain" position="Web Developer"  email="mailto:sameer2000jain12@gmail.com" linkdln="https://www.linkedin.com/in/sameer-jain-882589158/"/>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>


          {/* <MDBRow className="justify-content-center  mt-5">
            <TeamCard  name="Aashisha Singh" position="App Developer" email="" />
            <TeamCard name="Akshat Tripathi" position="App Developer" email="mailto:akshatofficial2019@gmail.com"/>
          </MDBRow> */}

      </div>
  );
  }

}

export default TeamPage;
