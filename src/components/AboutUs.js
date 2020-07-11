import React from "react";
import {  MDBRow, MDBCol, MDBIcon,MDBAnimation } from "mdbreact";
function AboutUs() {
  return (
      <div className="container-fluid px-0" style={{marginTop:80}}>
<section className="text-center my-0 my-md-5 z-depth-2 mx-0 mx-md-5 py-2 px-2">
        <MDBAnimation reveal type="fadeInUp">
            <h2 className="h1-responsive font-weight-bold my-5" style={{color:"#1a1245"}}>
              ABOUT US
            </h2>
          </MDBAnimation>
          <MDBAnimation reveal type="fadeInUp">
        <p className="p-responsive para dark-text w-responsive mx-auto px-auto mb-5 ">
        IIT(ISM) Dhanbad ACM Student Chapter was established in 2011 to address the needs of the IIT(ISM) Dhanbad computing community. The chapter organizes various events including talks, workshops, coding competitions, development competitions, many other technical and non-technical events covering various areas to excel and caters to the 1000 students enrolled in computing-related disciplines as well as numerous enthusiasts from all other disciplines. With over 1400 paid members, our chapter is one of the biggest chapters in India. Our Chapter constitutes all sorts of majors from Computer Science, Mathematics and Computing to Electrical, Electronics, Mining, Mechanical, etc. The chapter serves as a dynamic hub of activities where students who are passionate about different fields come to meet, interact, and learn from one another. IIT(ISM) Dhanbad ACM Student Chapter has established its unique aura by magnifying the level of computer programming, software development, extra circular activities, and digging up the quality of being technologically .
        </p>
          </MDBAnimation>

</section>
</div>
  );
}

export default AboutUs;