import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";
import TeamCard from "./TeamCard"
import {MDBAnimation } from "mdbreact"
import {Accordion, Card, Button } from "react-bootstrap"
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
        <MDBCardBody className="px-0">
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
          <MDBRow className="justify-content-center  my-5">
            <TeamCard column="6"  name="Hirdesh Gupta" position="Web Developer"  email="mailto:hirdeshgupta16@gmail.com" linkdln="https://www.linkedin.com/in/hirdesh-gupta-68117819a/"/>
            <TeamCard column="6"  name="Aakash Kumar Singh" position="Web Developer" email="mailto:aksingh01ak@gmail.com" linkdln="https://www.linkedin.com/in/aakash-kumar-singh-b60a4219b"/>
            <TeamCard name="Yash Vardhan" position="Web Developer" email="mailto:yashvardhan513@gmail.com" linkdln="https://www.linkedin.com/in/yash-vardhan-688952188"/>
            <TeamCard  name="Sameer Jain" position="Web Developer"  email="mailto:sameer2000jain12@gmail.com" linkdln="https://www.linkedin.com/in/sameer-jain-882589158/"/>
          </MDBRow >
          <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle className="btn-collapseb" variant="link" style={{width:"100%",border:0,outline:0,color:"#1A1245"}} eventKey="1">
        <h2>2019</h2>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
                    <MDBRow className="justify-content-center  mt-5">
                      <TeamCard column="6"  name="Ashwini Kumar" position="CHAIR"  email="" linkdln=""/>
                      <TeamCard column="6"  name="Suryakant Tibrewal" position="VICE CHAIR" email="" linkdln=""/>
                      <TeamCard column="6"  name="Jatin Vishwakarma" position="SECRETERY" email="" linkdln=""/>
                      <TeamCard name="Abhinav Kumar" position="TREASURER" email="" linkdln=""/>
                    </MDBRow>
                    <MDBRow className="justify-content-center  mt-5">
                      <TeamCard column="6"  name="Arpit Gupta" position="PUBLIC RELATION TEAM"  email="" linkdln=""/>
                      <TeamCard column="6"  name="Neelabh Krishna" position="PUBLIC RELATION TEAM" email="" linkdln=""/>
                      <TeamCard name="Rajat Budania" position="PUBLIC RELATION TEAM" email="" linkdln=""/>
                      <TeamCard  name="Charan Singh Verma" position="PUBLIC RELATION TEAM"  email="" linkdln=""/>
                    </MDBRow>
                              <MDBRow className="justify-content-center  mt-5">
                                <TeamCard column="6"  name="Jatin Vishwakarma" position="CONTENT WRITING TEAM"  email="" linkdln=""/>
                                <TeamCard column="6"  name="Ahmed Faiz" position="CONTENT WRITING TEAM" email="" linkdln=""/>
                                <TeamCard name="Apoorv Mishra" position="CONTENT WRITING TEAM" email="" linkdln=""/>
                                <TeamCard  name="Yashasvi Gour" position="CONTENT WRITING TEAM"  email="" linkdln=""/>
                              </MDBRow>
                                        <MDBRow className="justify-content-center  mt-5">
                                          <TeamCard column="6"  name="Shirisha Vislavath" position="MEMBERSHIP CHAIR " />
                                          <TeamCard column="6"  name="Abhinav Kumar" position="SPONSORSHIP TEAM"  email="" linkdln=""/>
                                          <TeamCard column="6"  name="Aditya Sunil Meshram" position="SPONSORSHIP TEAM" email="" linkdln=""/>
                                        </MDBRow>
                                        <MDBRow className="justify-content-center  mt-5">
                                                              <TeamCard column="6"  name="Preetam Jaiswal" position="MANAGEMENT AND PROMOTION TEAM" email="" linkdln=""/>
                                                              <TeamCard name="Atul Garg" position="MANAGEMENT AND PROMOTION TEAM" email="" linkdln=""/>
                                                              <TeamCard  name="Ajit Kumar" position="MANAGEMENT AND PROMOTION TEAM"  email="" linkdln=""/>
                                                            </MDBRow>
                                                  <MDBRow className="justify-content-center  my-5">
                                                    <TeamCard column="6"  name="Abhishek Raj" position="WEB DESIGNING AND GRAPHICS TEAM"  email="" linkdln=""/>
                                                    <TeamCard column="6"  name="Buddhabhushan Butkare" position="WEB DESIGNING AND GRAPHICS TEAM" email="" linkdln=""/>
                                                    <TeamCard name="Swapnil Narayan" position="WEB DESIGNING AND GRAPHICS TEAM" email="" linkdln=""/>
                                                    <TeamCard  name="Donthula Bharadwaj" position="WEB DESIGNING AND GRAPHICS TEAM"  email="" linkdln=""/>
                                                  </MDBRow>
 
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle style={{border:0,outline:0,color:"#1A1245",width:"100%"}} variant="link" eventKey="2">
        <h2>2018</h2>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
      <MDBRow className="justify-content-center  mt-5">
                      <TeamCard name="Aditya Kaushik" position="SENIOR ADVISOR" email="" linkdln=""/>
                      <TeamCard name="Saurabh Saraswat" position="SENIOR ADVISOR" />
                      <TeamCard column="6"  name="Rakesh Kumar" position="CHAIR" />

      </MDBRow>

          <MDBRow className="justify-content-center  mt-5">
          <TeamCard column="6"  name="Subham Kumar Soni" position="VICE-CHAIR" email="" linkdln=""/>
          <TeamCard name="Parth Patekar" position="MANAGEMENT & PROMOTION HEAD" email="" linkdln=""/>
            <TeamCard name="Yash Reddy" position="SPONSORSHIP & EDITORIAL HEAD" />
            <TeamCard  name="Sandeep IPK" position="PHOTOGRAPHY HEAD" />
          </MDBRow>
          <MDBRow className="justify-content-center  mt-5">
            <TeamCard name="Saloni Singh" position="SECRETARY" />
            <TeamCard name="Ashlik Jain" position="TREASURER"/>
            <TeamCard name="Swarnima Tripathi" position="MEMBERSHIP CHAIR" />
            <TeamCard name="Shubham Maurya" position="WEBMASTER" />
          </MDBRow>
          <MDBRow className="justify-content-center  mt-5">
          <TeamCard name="Ahsas Sood" position="MANAGEMENT COORDINATOR" />
            <TeamCard name="Prakhar Pandey" position="MANAGEMENT COORDINATOR" />
            <TeamCard  name="Nikita Paliwal" position="MARKETING COORDINATOR"/>
            <TeamCard name="Saurabh" position="PROMOTION COORDINATOR" />
          </MDBRow>
          <MDBRow className="justify-content-center  mt-5">
            <TeamCard name="Sarita" position="SPONSORSHIP COORDINATOR" />
            <TeamCard name="Vivek Tiwari" position="SPONSORSHIP COORDINATOR" />
            <TeamCard  name="Raj Rani" position="S & E COORDINATOR"/>
            <TeamCard name="Shubham Swaroop" position="EDITORIAL COORDINATOR" />
          </MDBRow>
          <MDBRow className="justify-content-center  my-5">
            <TeamCard name="Anand Thakkar" position="PHOTOGRAPHY COORDINATOR" />
            <TeamCard name="Charul Patidar" position="DESIGN COORDINATOR" />
            <TeamCard  name="Prabhat Gupta" position="DESIGN COORDINATOR" />
            <TeamCard  name="Kalyan" position="SIG COORDINATOR" />
          </MDBRow>
      </Card.Body>
    </Accordion.Collapse>

  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle style={{border:0,outline:0,color:"#1A1245",width:"100%"}} variant="link" eventKey="3">
        <h2>2017</h2>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
      <MDBRow className="justify-content-center  mt-5">
                      <TeamCard column="6"  name="Ayush Bhatia" position="CHAIR" />
                      <TeamCard name="Aditya Kaushik" position="SECRETARY" email="" linkdln=""/>
                      <TeamCard name="Saurabh Saraswat" position="WEBMASTER & DESIGN HEAD" />
      </MDBRow>

          <MDBRow className="justify-content-center  mt-5">
          <TeamCard column="6"  name="Tanishk Kithannae" position="VICE-CHAIR" email="" linkdln=""/>
            <TeamCard  name="Dola Sinha" position="TREASURER" />
            <TeamCard name="Yash Reddy" position="OVERALL SPONSORSHIP COORDINATOR" />
            <TeamCard name="Monika Kumari" position="MEMBERSHIP CHAIR" />

          </MDBRow>
          <MDBRow className="justify-content-center  mt-5">
            <TeamCard name="Parth Patekar" position="EVENT PROMOTION COORDINATOR" />
            <TeamCard name="Akshaya Athwale" position="MARKETING COORDINATOR" />
            <TeamCard name="Sandeep IPK" position="PHOTOGRAPHY COORDINATOR" />
            <TeamCard  name="Aval Singhal" position="PHOTOGRAPHY COORDINATOR"/>
          </MDBRow>
          <MDBRow className="justify-content-center  mt-y">
            <TeamCard name="Subham Kumar Soni" position="WEB COORDINATOR"/>
            <TeamCard name="Karra Anand" position="DESIGN COORDINATOR" />
            <TeamCard name="Rakesh Kumar" position="DESIGN COORDINATOR" />
          </MDBRow>

      </Card.Body>
    </Accordion.Collapse>
    
  </Card>
</Accordion>
        



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
