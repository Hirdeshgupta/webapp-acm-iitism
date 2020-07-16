import React from "react";
import {  MDBRow, MDBCol, MDBIcon,MDBAnimation } from "mdbreact";
function AboutUs() {
  return (
      <div className="container-fluid px-0" style={{marginTop:80,marginBottom:50}}>

<section className="text-center my-0 my-md-5 z-depth-2 mx-0 mx-md-5 py-2 px-2 about">
<img className="about-us-image" src={require("./img/cse-dept.jpeg")}></img>
        <MDBAnimation reveal type="fadeInUp">
            <h2 className="h1-responsive font-weight-bold my-5" style={{color:"#1a1245"}}>
              ABOUT ACM
            </h2>

          </MDBAnimation>
          <MDBAnimation reveal type="fadeInUp">
        <p className="p-responsive para  w-responsive mx-auto px-auto mb-5 con abouts about-acm">
        IIT (ISM) Dhanbad ACM Student Chapter was established in 2011 under the aegis of Department of Computer Science and Engineering, IIT(ISM) Dhanbad.
The chapter aims at serving as a dynamic hub of activites for the computing fraternity of IIT(ISM) Dhanbad, where enthusiasts meet, interact and learn from each other.
The chapter organizes various events which includes hackathons, technical workshops, talks by renowned speakers and coding competitions catering to 1500+ enthusiasts.
With over 1400+ paid members, our chapter is one of the biggest student chapters in India.

        </p>

          </MDBAnimation>


</section>
</div>
  );
}

export default AboutUs;
